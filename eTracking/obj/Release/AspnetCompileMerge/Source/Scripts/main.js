function getresult(url, param) {
    var result;
    $.ajax({
        url: url,
        async: false,
        type: 'POST',
        data: {
            format: 'json'
        },
        data: param,
        success: function (data) {
            result = data;
        },
        error: function (e) {
            alert('Some technical error');
        }
    });
    return result;
}

function GetSessionValue(appRoot, key) {
    pageUrl = appRoot + "eTracking/GetSessionValue";
    var param = {};
    param.xmlParameter = key;
    return getresult(pageUrl, param);
}

function makeTable(data) {
    var table = $("<table/>").addClass('tables');
    if (data.length > 1) {
        $.each(data, function (rowIndex, r) {
            var row = $("<tr/>");
            $.each(r, function (colIndex, c) {
                row.append($("<t" + (rowIndex == 0 ? "h" : "d") + "/>").text(c));
            });
            table.append(row);
        });
    }
    else {
        table = '<div class="error-box">Sorry !! No Record Found.</div>'
    }
    return table;
}

function exportTableToCSV($table, filename) {
    var $rows = $table.find('tr:has(td),tr:has(th)'),
        tmpColDelim = String.fromCharCode(11),
        tmpRowDelim = String.fromCharCode(0),
        colDelim = '","',
        rowDelim = '"\r\n"',
        csv = '"' + $rows.map(function (i, row) {
            var $row = $(row),
                $cols = $row.find('td ,th');
            return $cols.map(function (j, col) {
                var $col = $(col),
                    text = $col.text();
                return text.replace(/"/g, '""'); // escape double quotes
            }).get().join(tmpColDelim);

        }).get().join(tmpRowDelim)
            .split(tmpRowDelim).join(rowDelim)
            .split(tmpColDelim).join(colDelim) + '"',

       csvData = 'data:application/csv;charset=utf-8,' + encodeURIComponent(csv);
    $(this)
        .attr({
            'download': filename,
            'href': csvData,
            'target': '_blank'
        });
}

function UserLogOut() {
    unlockorder();
    url = appRoot + "/eTracking/Logout";
    var param = {};
    data = getresult(url, param)
    window.open('', '_self').close();
    window.location.assign("http://192.168.15.25/Adpro");
}

function unlockorder() {
    var userid = $("#hdnuserid").val();
    var centerid = $("#hdnlogcentreid").val();
    var moduleid = '6';
    url = appRoot + "/eTracking/unlockorder";
    var param = {};
    param.userid = userid;
    param.centerid = centerid;
    param.moduleid = moduleid;
    data = getresult(url, param);
}


function ShowMsg(Msg, type, isAutoClose) {
    if ($('#showMSG').html().trim() != '') {
        setTimeout(function () {
            ShowMsg(Msg, type, isAutoClose);
        }, 500);
        return;
    }
    //0-error,1-success,2-waring,3-info
    type = type == null ? 1 : type;
    isAutoClose = isAutoClose == null ? true : isAutoClose;
    switch (type) {
        case 0:
            msgString = '<div class="alert alert-danger" style="margin:0;">' + '<strong>Error! </strong>' + Msg + '</a>' + '</div>';
            break;
        case 1:
            msgString = '<div class="alert alert-success" style="margin:0;">' + '<strong>Success! </strong>' + Msg + '</a>' + '</div>';
            break;
        case 2:
            msgString = '<div class="alert alert-warning" style="margin:0;">' + '<strong>Warning! </strong>' + Msg + '</a>' + '</div>';
            break;
        case 3:
            msgString = '<div class="alert alert-info" style="margin:0;">' + '<strong>Info! </strong>' + Msg + '</a>' + '</div>';
            break;
        default:
            msgString = '<div class="alert alert-info" style="margin:0;">' + '<strong>Success! </strong>' + Msg + '</a>' + '</div>';
    }
    if (isAutoClose == false)
        msgString += "";
    var id = $('#showMSG');

    $(id).html(msgString).show();
    $(id).fadeIn(1000);
    $(id).delay(3000).fadeOut(1000, function () { $('#showMSG').html('').hide(); });

    $(id).hover(function () {
        $(id).stop(true, true).fadeTo(500, 1);
    }, function () {
        $(id).stop(true, true).fadeOut(1, 0);
        $(id).delay(3000).fadeOut(1000, function () { $('#showMSG').html('').hide(); });
    });
}




//function ShowMsg(Msg, type, isAutoClose) {
//    if ($('#showMSG').html().trim() != '') {
//        setTimeout(function () {
//            ShowMsg(Msg, type, isAutoClose);
//        }, 500);
//        return;
//    }
//    //0-error,1-success,2-warning,3-info
//    type = type == null ? 1 : type;
//    isAutoClose = isAutoClose == null ? true : isAutoClose;
//    switch (type) {
//        case 0:
//            msgString = '<div class="alert alert-danger" style="margin:0;">' + '<strong>Error! </strong>' + Msg + '</a>' + '</div>';
//            break;
//        case 1:
//            msgString = '<div class="alert alert-success" style="margin:0;">' + '<strong>Success! </strong>' + Msg + '</a>' + '</div>';
//            break;
//        case 2:
//            msgString = '<div class="alert alert-warning" style="margin:0;">' + '<strong>Warning! </strong>' + Msg + '</a>' + '</div>';
//            break;
//        case 3:
//            msgString = '<div class="alert alert-info" style="margin:0;">' + '<strong>Info! </strong>' + Msg + '</a>' + '</div>';
//            break;
//        default:
//            msgString = '<div class="alert alert-info" style="margin:0;">' + '<strong>Success! </strong>' + Msg + '</a>' + '</div>';
//    }
//    if (isAutoClose == false)
//        msgString += "";
//    var id = $('#showMSG');

//    $(id).html(msgString);
//    $(id).fadeIn(1000);
//    $(id).delay(3000).fadeOut(1000, function () { $('#showMSG').html(''); });
//    $(id).hover(function () {
//        $(id).bind("fadeOut");
//    }, function () {
//        $(id).bind("fadeOut");
//    });
//}

           // old method for show msg
//function ShowMsg(Msg, type, isAutoClose) {
//    type = type == null ? 1 : type;
//    isAutoClose = isAutoClose == null ? true : isAutoClose;
//    switch (type) {
//        case 0:
//            msgString = '<div class="alert alert-danger" style="margin:0;">' + '<strong>Error! </strong>' + Msg + '</a>' + '</div>';
//            break;
//        case 1:
//            msgString = '<div class="alert alert-success" style="margin:0;">' + '<strong>Success! </strong>' + Msg + '</a>' + '</div>';
//            break;
//        case 2:
//            msgString = '<div class="alert alert-warning" style="margin:0;">' + '<strong>Warning! </strong>' + Msg + '</a>' + '</div>';
//            break;
//        case 3:
//            msgString = '<div class="alert alert-info" style="margin:0;">' + '<strong>Info! </strong>' + Msg + '</a>' + '</div>';
//            break;
//        default:
//            msgString = '<div class="alert alert-info" style="margin:0;">' + '<strong>Success! </strong>' + Msg + '</a>' + '</div>';
//    }
//    if (isAutoClose == false)
//        msgString += "";
//    var id = $('#showMSG');
//    $(id).html(msgString);
//    $(id).fadeIn(1000);
//    $(id).delay(3000).fadeOut(1000);
//    $(id).hover(function () {
//        $(id).bind("fadeOut");;
//    }, function () {
//        $(id).bind("fadeOut");;
//    });
//}


