// RoboSeekho National Innovation Challenge 2026 — registration form logic
//
// SETUP: after deploying the Google Apps Script Web App (see apps-script/SETUP.md),
// paste its /exec URL below. Until you do, submissions cannot be saved.
var RC_CONFIG = {
  GAS_URL: 'PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE'
};

document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('rcRegForm');
  if (!form) return;

  var submitBtn = document.getElementById('rcSubmitBtn');
  var formError = document.getElementById('rcFormError');
  var interestsError = document.getElementById('interestsError');
  var interestGrid = form.querySelector('.rc-check-grid');
  var modal = document.getElementById('rcSuccessModal');
  var modalClose = document.getElementById('rcModalClose');
  var regIdOutput = document.getElementById('rcRegIdOutput');

  var mobileInput = document.getElementById('mobile');
  var whatsappInput = document.getElementById('whatsapp');
  var sameAsMobile = document.getElementById('sameAsMobile');

  var studentClassSelect = document.getElementById('studentClass');
  var streamWrap = document.getElementById('streamWrap');
  var streamLabel = document.getElementById('streamLabel');
  var streamSelect = document.getElementById('stream');
  var streamOtherWrap = document.getElementById('streamOtherWrap');
  var streamOtherInput = document.getElementById('streamOther');

  var mobileRe = /^[6-9]\d{9}$/;
  var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var urlRe = /^https?:\/\/.+/i;

  function setFieldError(field, isInvalid) {
    var wrap = field.closest('.rc-field');
    if (wrap) wrap.classList.toggle('rc-invalid', isInvalid);
  }

  // ---------- WhatsApp "same as mobile" ----------
  if (sameAsMobile && mobileInput && whatsappInput) {
    sameAsMobile.addEventListener('change', function () {
      if (sameAsMobile.checked) {
        whatsappInput.value = mobileInput.value;
        whatsappInput.readOnly = true;
        setFieldError(whatsappInput, false);
      } else {
        whatsappInput.readOnly = false;
      }
    });
    mobileInput.addEventListener('input', function () {
      if (sameAsMobile.checked) whatsappInput.value = mobileInput.value;
    });
  }

  // ---------- Class -> Stream question ----------
  function updateStreamField() {
    var cls = studentClassSelect.value;
    var isCurrent = cls === 'Class 11' || cls === 'Class 12';
    var isFuture = cls === 'Class 9' || cls === 'Class 10';

    if (isCurrent) {
      streamWrap.style.display = '';
      streamLabel.innerHTML = 'Stream <span class="req">*</span>';
      streamSelect.required = true;
    } else if (isFuture) {
      streamWrap.style.display = '';
      streamLabel.textContent = 'Which stream are you thinking of choosing in the future?';
      streamSelect.required = false;
    } else {
      streamWrap.style.display = 'none';
      streamSelect.required = false;
      streamSelect.value = '';
      streamOtherWrap.style.display = 'none';
      streamOtherInput.value = '';
      setFieldError(streamSelect, false);
      setFieldError(streamOtherInput, false);
    }
    updateStreamOtherField();
  }

  function updateStreamOtherField() {
    if (streamWrap.style.display !== 'none' && streamSelect.value === 'Other') {
      streamOtherWrap.style.display = '';
    } else {
      streamOtherWrap.style.display = 'none';
      streamOtherInput.value = '';
      setFieldError(streamOtherInput, false);
    }
  }

  if (studentClassSelect) {
    studentClassSelect.addEventListener('change', updateStreamField);
    streamSelect.addEventListener('change', updateStreamOtherField);
    updateStreamField();
  }

  // ---------- Interest area (single-select, highlight chosen card) ----------
  form.querySelectorAll('input[name="interest"]').forEach(function (radio) {
    radio.addEventListener('change', function () {
      form.querySelectorAll('.rc-check-option').forEach(function (label) {
        label.classList.toggle('rc-selected', label.contains(radio) && radio.checked);
      });
      if (form.querySelectorAll('input[name="interest"]:checked').length > 0) {
        interestsError.style.display = 'none';
        if (interestGrid) interestGrid.classList.remove('rc-invalid');
      }
    });
  });

  function validate() {
    var valid = true;
    formError.classList.remove('show');

    form.querySelectorAll('[required]').forEach(function (field) {
      var fieldValid = true;
      if (field.type === 'radio') {
        fieldValid = form.querySelectorAll('input[name="' + field.name + '"]:checked').length > 0;
      } else if (field.type === 'checkbox') {
        fieldValid = field.checked;
      } else {
        fieldValid = field.value.trim().length > 0;
      }
      if (field.id === 'mobile' && fieldValid) fieldValid = mobileRe.test(field.value.trim());
      if (field.id === 'whatsapp' && fieldValid) fieldValid = mobileRe.test(field.value.trim());
      if (field.id === 'email' && fieldValid) fieldValid = emailRe.test(field.value.trim());

      if (!fieldValid) valid = false;
      if (field.type !== 'radio') setFieldError(field, !fieldValid);
    });

    // stream: required only when class is 11/12 (visible + required flag set above)
    if (streamSelect.required) {
      var streamValid = streamSelect.value.trim().length > 0;
      setFieldError(streamSelect, !streamValid);
      if (!streamValid) valid = false;
    }
    // "please specify" is required whenever the Other option is showing
    if (streamOtherWrap.style.display !== 'none') {
      var streamOtherValid = streamOtherInput.value.trim().length > 0;
      setFieldError(streamOtherInput, !streamOtherValid);
      if (!streamOtherValid) valid = false;
    }

    // interest area: exactly one required
    var interestChecked = form.querySelectorAll('input[name="interest"]:checked').length > 0;
    interestsError.style.display = interestChecked ? 'none' : 'block';
    if (interestGrid) interestGrid.classList.toggle('rc-invalid', !interestChecked);
    if (!interestChecked) valid = false;

    // drive link: required (checked by the generic [required] loop above), and must look like a URL
    var driveLinkField = form.querySelector('#driveLink');
    if (driveLinkField && driveLinkField.value.trim().length > 0) {
      var driveLinkValid = urlRe.test(driveLinkField.value.trim());
      setFieldError(driveLinkField, !driveLinkValid);
      if (!driveLinkValid) valid = false;
    }

    return valid;
  }

  // clear error state as user fixes fields
  form.addEventListener('input', function (e) {
    if (e.target.closest('.rc-field')) setFieldError(e.target, false);
  });

  function showError(message) {
    formError.textContent = message;
    formError.classList.add('show');
    formError.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function setLoading(isLoading) {
    submitBtn.disabled = isLoading;
    submitBtn.classList.toggle('loading', isLoading);
    submitBtn.querySelector('.rc-btn-label').textContent = isLoading ? 'Submitting...' : 'Submit Registration';
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!validate()) {
      showError('Please fill in all required fields correctly before submitting.');
      var firstInvalid = form.querySelector('.rc-invalid');
      if (firstInvalid) firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    if (RC_CONFIG.GAS_URL.indexOf('PASTE_YOUR_GOOGLE_APPS_SCRIPT') !== -1) {
      showError('Registration backend is not configured yet. See apps-script/SETUP.md to connect Google Sheets.');
      return;
    }

    var interestChecked = form.querySelector('input[name="interest"]:checked');

    var payload = {
      fullName: form.fullName.value.trim(),
      mobile: form.mobile.value.trim(),
      whatsapp: form.whatsapp.value.trim(),
      email: form.email.value.trim(),
      gender: form.gender.value,
      dob: form.dob.value,
      studentClass: form.studentClass.value,
      stream: streamWrap.style.display !== 'none'
        ? (streamSelect.value === 'Other' ? streamOtherInput.value.trim() : streamSelect.value)
        : '',
      school: form.school.value.trim(),
      city: form.city.value.trim(),
      state: form.state.value,
      board: form.board.value,
      interest: interestChecked ? interestChecked.value : '',
      driveLink: form.driveLink.value.trim()
    };

    setLoading(true);

    fetch(RC_CONFIG.GAS_URL, {
      method: 'POST',
      // text/plain avoids a CORS preflight request against Apps Script
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload)
    })
      .then(function (res) { return res.json(); })
      .then(function (data) {
        setLoading(false);
        if (data && data.result === 'success') {
          regIdOutput.textContent = data.registrationId || '';
          modal.classList.add('show');
          form.reset();
          updateStreamField();
        } else {
          showError((data && data.message) || 'Something went wrong while saving your registration. Please try again.');
        }
      })
      .catch(function () {
        setLoading(false);
        showError('Could not reach the registration server. Please check your internet connection and try again.');
      });
  });

  if (modalClose) {
    modalClose.addEventListener('click', function () {
      modal.classList.remove('show');
    });
  }
});
