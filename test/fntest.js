
// 系统通知
//var myNotification = new Notification('更新通知', {
//    body: '软件有更新，请及时更新'
//});

//myNotification.onclick = function () {
//    console.log('Notification clicked')
//}
const remote = require('electron').remote;
// 关闭按钮
$("#close-btn").on('click', function () {
    remote.getCurrentWindow().close();
});
$("#minimize-btn").on("click", function () {
    remote.getCurrentWindow().minimize();
})

