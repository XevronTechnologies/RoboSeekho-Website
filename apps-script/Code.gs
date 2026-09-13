/**
 * RoboSeekho National Innovation Challenge 2026 — Registration backend.
 *
 * Deploy this file as a Google Apps Script Web App bound to a Google Sheet.
 * See SETUP.md in this folder for step-by-step deployment instructions.
 */

var SHEET_NAME = 'Registrations';
var ID_PREFIX = 'RSIC2026-';

var HEADERS = [
  'Timestamp', 'Full Name', 'Mobile', 'WhatsApp', 'Email', 'Gender', 'DOB',
  'Class', 'Stream', 'School', 'City', 'State', 'Board', 'Interest Area',
  'Drive Link', 'Registration ID'
];

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function nextRegistrationId_(sheet) {
  var lastRow = sheet.getLastRow(); // includes header row
  var seq = lastRow; // header is row 1, so lastRow == number of existing registrations
  var num = String(seq).padStart(4, '0');
  return ID_PREFIX + num;
}

function jsonOutput_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonOutput_({ result: 'error', message: 'No data received.' });
    }

    var data = JSON.parse(e.postData.contents);

    var required = ['fullName', 'mobile', 'whatsapp', 'email', 'gender', 'dob',
      'studentClass', 'school', 'city', 'state', 'board', 'interest', 'driveLink'];
    for (var i = 0; i < required.length; i++) {
      if (!data[required[i]] || String(data[required[i]]).trim() === '') {
        return jsonOutput_({ result: 'error', message: 'Missing required field: ' + required[i] });
      }
    }
    if ((data.studentClass === 'Class 11' || data.studentClass === 'Class 12') &&
        (!data.stream || String(data.stream).trim() === '')) {
      return jsonOutput_({ result: 'error', message: 'Missing required field: stream' });
    }

    var sheet = getSheet_();
    var registrationId = nextRegistrationId_(sheet);

    sheet.appendRow([
      new Date(),
      data.fullName,
      data.mobile,
      data.whatsapp,
      data.email,
      data.gender,
      data.dob,
      data.studentClass,
      data.stream || '',
      data.school,
      data.city,
      data.state,
      data.board,
      data.interest,
      data.driveLink || '',
      registrationId
    ]);

    return jsonOutput_({ result: 'success', registrationId: registrationId });

  } catch (err) {
    return jsonOutput_({ result: 'error', message: 'Server error: ' + err.message });
  } finally {
    lock.releaseLock();
  }
}

// Lets you sanity-check the deployment by opening the Web App URL in a browser.
function doGet(e) {
  return jsonOutput_({ result: 'ok', message: 'RoboSeekho registration endpoint is live.' });
}
