var playerReady = false;
var playerState = 0;
var at = $('#alphaTab');

//
// 1. Load alphaTab
at.alphaTab();

//
// 2. Initialize Player and Setup Player UI
var as = at.alphaTab('playerInit', {
    asRoot: '/lib/alphaSynth/',
    swfObjectRoot: '/lib/alphaSynth/'
}); // init alphaSynth

as.On('ready', function(r) {
    // load default data
    as.LoadSoundFontUrl('/lib/alphaSynth/default.sf2');
});
as.On('soundFontLoad', function(loaded, full) {
    var percentage = ((loaded / full) * 100)|0;
    $('#sfInfo .progress').text('(' + percentage + '%)');
});
as.On('soundFontLoaded', function() {
    $('#sfInfo').hide();
});
as.On('readyForPlay', function(r) {
    playerReady = r;
    updateControls();
});
as.On('playerStateChanged', function(s) {
    playerState = s;
    updateControls();
});

$('#playPause').click(function() {
    if(playerState == 1) {
        as.Pause();
    }
    else {
        as.Play();
    }
});
$('#stop').click(function() {
    as.Stop();
});

function updateControls() {
    if(!playerReady) {
        $('#loadingInfo').show()
        $('#controls button').attr('disabled', 'disabled');
        $('#layoutButtons button').attr('disabled', 'disabled');
    }
    else {
        $('#loadingInfo').hide()
        $('#playPause').removeAttr('disabled');
        $('#layoutButtons button').removeAttr('disabled');
        switch(playerState) {
            case 0: // stopped
            $('#playPause').text('Play').removeClass('pause').addClass('play');
            $('#stop').attr('disabled', 'disabled');
            break;
            case 1: // playing
            $('#playPause').text('Pause').removeClass('play').addClass('pause');
            $('#stop').removeAttr('disabled');
            break;
            case 2: // paused
            $('#playPause').text('Play').removeClass('pause').addClass('play');
            $('#stop').removeAttr('disabled');
            break;
        }
    }
}

$('#layoutButtons button').click(function() {
    $('#layoutButtons button').removeClass('active');
    $(this).addClass('active');

    var layout = $(this).data('layout');
    var scrollmode = $(this).data('scrollmode');
    // update renderer
    var renderer = at.alphaTab('renderer');
    renderer.Settings.Layout.Mode = layout;
    renderer.Invalidate();

    // update player
    var context = at.data('alphaTab');
    context.cursorOptions.autoScroll = scrollmode;
    at.alphaTab('playerCursorUpdateBeat', context.cursorOptions.currentBeat);
});

//
// 3. Add cursors (optional)
at.alphaTab('playerCursor');
// at.alphaTab('drop'); // drag and drop
