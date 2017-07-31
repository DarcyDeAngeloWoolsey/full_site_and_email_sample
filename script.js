$(document).ready(function () {
    /*$('button.claim-checkbox').click(function () {
        if ($(this).hasClass("deselect")) {
            // deselect all btns
            $(this).text('SELECTED');
            $(this).removeClass("deselect");
            $(this).addClass("selected");
        }
        else {
            // deselect all btns
            $(this).text('SELECT');
            $(this).removeClass("selected");
            $(this).addClass("deselect");
            $(this).removeClass("hoverBlue");
        }
    });*/
    /*NOTE HOW WORKS: WHEN THE RADIO BUTTON IS CHANGED, THEN ALL DIV SIBLINGS OF CHOOSE OFFER INPUT HAVE CLASS OF SELECT, THEN THE ONE THAT IS CHECKED IS CHANGED TO SELECTED.*/
    $('input[type=radio]').change(function () {
        $(this).closest('.feed_container').find('.choose-offer-input').siblings('div:not(.disabled)').text('Select');
        $(this).closest('.feed_container').find('.choose-offer-input').siblings('.disabled').text('Claimed');
        $(this).closest('.feed_container').find('.choose-offer-input').siblings('div:not(.disabled)').removeClass("selected");
        $(this).closest('.feed_container').find('.choose-offer-input').siblings('div:not(.disabled)').addClass("deselect");
        if ($('.choose-offer-input').is(':checked')) {
            $(this).siblings('div:not(.disabled)').text('Selected');
            $(this).siblings('div:not(.disabled)').removeClass("deselect");
            $(this).siblings('div:not(.disabled)').addClass("selected");
        }
    });
    $('input[type=radio]').change(function () {
        $(this).closest('.offer_tweet_group').find('.choose-offer-input').siblings('div').text('Select');
        $(this).closest('.offer_tweet_group').find('.choose-offer-input').siblings('div').removeClass("selected");
        $(this).closest('.offer_tweet_group').find('.choose-offer-input').siblings('div').addClass("deselect");
        if ($('.choose-offer-input').is(':checked')) {
            $(this).siblings('div').text('Selected');
            $(this).siblings('div').removeClass("deselect");
            $(this).siblings('div').addClass("selected");
            $(this).siblings('.disabled').text('Claimed');
        }
    });
});
