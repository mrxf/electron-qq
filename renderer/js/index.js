
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
// 当按下最小化按钮之后的事件
$("#minimize-btn").on("click", function () {
    remote.getCurrentWindow().minimize();
})

// 当输入帐号失去焦点之后，更换左侧头像图片
$("#user-number").on("blur", function () {
    if ($(this).val().length > 4) {
        let photoLink = 'http://q.qlogo.cn/g?b=qq&nk=' + $(this).val() + '&s=100';
        $("#user-photo").prop("src", photoLink);
    }

})