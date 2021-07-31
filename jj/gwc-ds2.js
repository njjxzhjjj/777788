//雨伞的数量增加
function addn(dom) {
    var wd = $(dom).prev();
    wd.val(parseInt(wd.val()) + 1);
    var sum = parseFloat(wd.val() * (32.9)).toLocaleString();
    $(dom).parent().parent().children().eq(2).html("￥" + sum + "元");
}
//雨伞的数量减少
function sub(dom) {
    var wd = $(dom).next().val();
    if (wd == 1) {
        return;
    }
    $(dom).next().val(--wd);
    var sum = parseFloat(wd * (32.9)).toLocaleString();
    $(dom).parent().parent().children().eq(2).html("￥" + sum + "元");
}

//手机的数量增加
function addp(dom) {
    var wd = $(dom).prev();
    wd.val(parseInt(wd.val()) + 1);
    var sum = parseFloat(wd.val() * (3339)).toLocaleString();
    $(dom).parent().parent().children().eq(2).html("￥" + sum + "元");
}
//手机的数量减少
function sup(dom) {
    var wd = $(dom).next().val();
    if (wd == 1) {
        return;
    }
    $(dom).next().val(--wd);
    // toLocaleString()  toFixed(2)
    var sum = parseFloat(wd * (3339)).toLocaleString();
    $(dom).parent().parent().children().eq(2).html("￥" + sum + "元");

}
function checkall(dom) {
    //全选

    $.each($('table tr td input'), function (index, value) {
        $(this).prop('checked', !$(this).prop('checked'));

    })

}
//添加
// 随机添加一个商品
function adde(td) {    
    var s= parseInt(Math.random()*2)+1
    var v= $('table tr').eq(s).children('td').eq(3).find('input').val()
    var vv=parseInt(v)+1
    $('table tr').eq(s).children('td').eq(3).find('input').val(vv)
     on($('table tr').eq(s).children('td').eq(3).find('input'))
     
         
  
 }

$(function () {

    //批量删除
    $('#delBatch').click(function () {
        $('table input:checked').parent().parent().remove();
    })


    //删除
    $('.del').click(function () {
        $(this).parent().parent().remove();
    })


})