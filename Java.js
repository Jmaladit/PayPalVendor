document.getElementById('amount').addEventListener('change', function() {
    var amount = this.value;
    var hostedButtonId = '';

    switch (amount) {
        case '250':
            hostedButtonId = 'BUTTON_ID_FOR_250';
            break;
        case '500':
            hostedButtonId = 'BUTTON_ID_FOR_500';
            break;
        case '1000':
            hostedButtonId = 'BUTTON_ID_FOR_1000';
            break;
        case '2500':
            hostedButtonId = 'BUTTON_ID_FOR_2500';
            break;
        case '5000':
            hostedButtonId = 'BUTTON_ID_FOR_5000';
            break;
    }

    document.getElementById('hosted_button_id').value = hostedButtonId;
});
