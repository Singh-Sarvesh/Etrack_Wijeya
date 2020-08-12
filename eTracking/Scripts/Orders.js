var agencyidvalue = 0;
var clientidvalue = 0;
var canvassoridvalue = 0;
var adtypeidvalue1 = 0;
var adtypeidvalue2 = 0;
var adtypeidvalue3 = 0;
var adtypeidvalue4 = 0;
var selroid;

function Orderspageload(appRoot) {
    var userid = $("#hdnuserid").val();
    if (userid == undefined || userid == null || userid == '') {
        UserLogOut();
    }
    else {
        BindOrdersFiltersData(appRoot);
        AutoFillOrdersagencyclientList(appRoot);
        BindOrdersButtonRights(appRoot);
        BindOrdersAdtypeData(appRoot);
    }
}

function BindOrdersFiltersData(appRoot) {
    var isclassified = $("#hdnIsClassified").val();
    var logcentreid = $("#hdnlogcentreid").val();
    if (logcentreid == undefined || logcentreid == "") {
        logcentreid = 1;
    }
    var userid = $("#hdnuserid").val();
    if (userid == undefined || userid == "") {
        userid = 1;
    }
    var filterscreen = $("#hdnScreenId").val();
    if (filterscreen == undefined) {
        filterscreen = 1;
    }
    var allFilterElement = $('[newflag = "forXmltype"]');
    var allFilterElementLength = allFilterElement.length;
    for (var i = 0; i < allFilterElementLength; i++) {
        $("#" + allFilterElement[i].id).empty();
        $("#agencyid").empty();
        $("#clientid").empty();
        $("#canvassorid").empty();
        $("#adtypeid1").empty();
        $("#adtypeid2").empty();
        $("#adtypeid3").empty();
        $("#adtypeid4").empty();
        var parametername = $("#" + allFilterElement[i].id).attr("parameter");
        var paramValue = $("#" + allFilterElement[i].id).val();
        if (paramValue == null)
            paramValue = 0;
        var xmlString = "<track><actionname>" + parametername + "</actionname><isclassified>" + isclassified + "</isclassified>"
        xmlString += "<logcentreid>" + logcentreid + "</logcentreid><loguserid>" + userid + "</loguserid><screen>" + filterscreen + "</screen></track>";
        var url = appRoot + "TrackOrders/etrackingFiltersData";
        var param = {};
        param.xmlData = xmlString;
        var result = getresult(url, param);
        if (result.length > 0) {
            for (var m = 0; m < result.length; m++)
                $("#" + allFilterElement[i].id).append(new Option(result[m].key, result[m].value));
        }
    }
}

function BindOrdersAdtypeData(appRoot) {
    var isclassified = $("#hdnIsClassified").val();
    var logcentreid = $("#hdnlogcentreid").val();
    if (logcentreid == undefined || logcentreid == "") {
        logcentreid = 1;
    }
    var userid = $("#hdnuserid").val();
    if (userid == undefined || userid == "") {
        userid = 1;
    }
    var filterscreen = $("#hdnScreenId").val();
    if (filterscreen == undefined) {
        filterscreen = 1;
    }
    var allFilterElement = $('[newflag = "forXmlAdtype"]');
    var allFilterElementLength = allFilterElement.length;
    for (var i = 0; i < allFilterElementLength; i++) {
        $("#" + allFilterElement[i].id).empty();
        $("#agencyid").empty();
        $("#clientid").empty();
        $("#canvassorid").empty();
        $("#adtypeid1").empty();
        $("#adtypeid2").empty();
        $("#adtypeid3").empty();
        $("#adtypeid4").empty();
        var parametername = $("#" + allFilterElement[i].id).attr("parameter");
        var paramValue = $("#" + allFilterElement[i].id).val();
        if (paramValue == null)
            paramValue = 0;
        var xmlString = "<track><actionname>" + parametername + "</actionname><isclassified>" + isclassified + "</isclassified>"
        xmlString += "<logcentreid>" + logcentreid + "</logcentreid><loguserid>" + userid + "</loguserid><screen>" + filterscreen + "</screen></track>";
        var url = appRoot + "TrackOrders/etrackingFiltersData";
        var param = {};
        param.xmlData = xmlString;
        var result = getresult(url, param);
        if (result.length > 0) {
            for (var m = 0; m < result.length; m++)
                $("#" + allFilterElement[i].id).append(new Option(result[m].key, result[m].value));
        }
    }
}

function ReasonRemarksfilters() {
    var isclassified = $("#hdnIsClassified").val();
    var logcentreid = $("#hdnlogcentreid").val();
    if (logcentreid == undefined || logcentreid == "") {
        logcentreid = 1;
    }
    var userid = $("#hdnuserid").val();
    if (userid == undefined || userid == "") {
        userid = 1;
    }
    var filterscreen = $("#hdnScreenId").val();
    if (filterscreen == undefined) {
        filterscreen = 1;
    }
    var allFilterElement = $('[newflag = "forRRXmltype"]');
    var allFilterElementLength = allFilterElement.length;
    for (var i = 0; i < allFilterElementLength; i++) {
        $("#" + allFilterElement[i].id).empty();
        var parametername = $("#" + allFilterElement[i].id).attr("parameter");
        var paramValue = $("#" + allFilterElement[i].id).val();
        if (paramValue == null)
            paramValue = 0;
        var xmlString = "<track><actionname>" + parametername + "</actionname><isclassified>" + isclassified + "</isclassified>"
        xmlString += "<logcentreid>" + logcentreid + "</logcentreid><loguserid>" + userid + "</loguserid><screen>" + filterscreen + "</screen></track>";
        var url = appRoot + "TrackOrders/etrackingFiltersData";
        var param = {};
        param.xmlData = xmlString;
        var result = getresult(url, param);
        if (result.length > 0) {
            for (var m = 0; m < result.length; m++)
                $("#" + allFilterElement[i].id).append(new Option(result[m].key, result[m].value));
        }
    }
}

function AutoFillOrdersagencyclientList(appRoot) {
    $("#clientid").autocomplete({
        source: function (request, response) {
            var isclassified = $("#hdnIsClassified").val();
            var logcentreid = $("#hdnlogcentreid").val();
            if (logcentreid == undefined || logcentreid == "") {
                logcentreid = 1;
            }
            var userid = $("#hdnuserid").val();
            if (userid == undefined || userid == "") {
                userid = 1;
            }
            var filterscreen = $("#hdnScreenId").val();
            if (filterscreen == undefined) {
                filterscreen = 1;
            }
            var clientcatid = $("#clientcatid").val();
            var parametername = $("#clientid").attr("parameter");
            var paramValue = $("#clientid").val();
            if (paramValue == null)
                paramValue = 0;
            var xmlString = "<track><actionname>" + parametername + "</actionname><isclassified>" + isclassified + "</isclassified>"
            xmlString += "<logcentreid>" + logcentreid + "</logcentreid><loguserid>" + userid + "</loguserid><screen>" + filterscreen + "</screen>"
            xmlString += "<clientname>" + paramValue.replace('&', '&amp;') + "</clientname><clientcatid>" + clientcatid + "</clientcatid><agencyflag>1</agencyflag></track>";
            var url = appRoot + "TrackOrders/etrackingFiltersData";
            var param = {};
            param.xmlData = xmlString;
            var result = getresult(url, param);
            response($.map(result, function (item, aa) {
                return {
                    value: item.key,
                    key: item.value,
                }
            }))
        },
        minLength: 1,
        maxHeight: 200,
        select: function (event, ui) {
            $("#clientid").val(ui.item.key);
            clientidvalue = ui.item.key;
        },
        //change: function (event, ui) {
        //    if (clientidvalue == 0)
        //        $(this).val("");

        //}
    }).keyup(function (e) { if (e.keyCode != 13 && e.keyCode != 9 && !e.ctrlKey && e.keyCode != 27) clientidvalue = 0; });
    $('#clientid').click(function () {
        $(this).select();
    });
    $("#clientid").change(function () { if ($(this).val() == '') if (this.id == 'clientid') clientidvalue = 0; });
    $("#clientnameid").autocomplete({
        source: function (request, response) {
            var isclassified = $("#hdnIsClassified").val();
            var logcentreid = $("#hdnlogcentreid").val();
            if (logcentreid == undefined || logcentreid == "") {
                logcentreid = 1;
            }
            var userid = $("#hdnuserid").val();
            if (userid == undefined || userid == "") {
                userid = 1;
            }
            var filterscreen = $("#hdnScreenId").val();
            if (filterscreen == undefined) {
                filterscreen = 1;
            }
            var clientcatid = $("#clientcatid").val();
            var parametername = $("#clientnameid").attr("parameter");
            var paramValue = $("#clientnameid").val();
            if (paramValue == null)
                paramValue = 0;
            var xmlString = "<track><actionname>" + parametername + "</actionname><isclassified>" + isclassified + "</isclassified>"
            xmlString += "<logcentreid>" + logcentreid + "</logcentreid><loguserid>" + userid + "</loguserid><screen>" + filterscreen + "</screen>"
            xmlString += "<clientname>" + paramValue.replace('&', '&amp;') + "</clientname><clientcatid>" + clientcatid + "</clientcatid><agencyflag>1</agencyflag></track>";
            var url = appRoot + "TrackOrders/etrackingFiltersData";
            var param = {};
            param.xmlData = xmlString;
            var result = getresult(url, param);
            response($.map(result, function (item, aa) {
                return {
                    value: item.key,
                    key: item.value,
                }
            }))
        },
        minLength: 1,
        maxHeight: 200,
        select: function (event, ui) {
            $("#clientnameid").val(ui.item.key);
            clientidvalue = ui.item.key;
        },
        change: function (event, ui) {
            if (clientidvalue == 0)
                $(this).val("");

        },
        appendTo: $("#clientFilter")
    }).keyup(function (e) { if (e.keyCode != 13 && e.keyCode != 9 && !e.ctrlKey && e.keyCode != 27) clientidvalue = 0; });
    $('#clientnameid').click(function () {
        $(this).select();
    });
    $("#clientnameid").change(function () { if ($(this).val() == '') if (this.id == 'clientnameid') clientidvalue = 0; });
    $("#agencyid").autocomplete({
        source: function (request, response) {
            var isclassified = $("#hdnIsClassified").val();
            var logcentreid = $("#hdnlogcentreid").val();
            if (logcentreid == undefined || logcentreid == "") {
                logcentreid = 1;
            }
            var userid = $("#hdnuserid").val();
            if (userid == undefined || userid == "") {
                userid = 1;
            }
            var filterscreen = $("#hdnScreenId").val();
            if (filterscreen == undefined) {
                filterscreen = 1;
            }
            var agencycatid = $("#agencycatid").val();
            var parametername = $("#agencyid").attr("parameter");
            var paramValue = $("#agencyid").val();
            if (paramValue == null)
                paramValue = 0;
            var xmlString = "<track><actionname>" + parametername + "</actionname><isclassified>" + isclassified + "</isclassified>"
            xmlString += "<logcentreid>" + logcentreid + "</logcentreid><loguserid>" + userid + "</loguserid><screen>" + filterscreen + "</screen>"
            xmlString += "<agencyname>" + paramValue.replace('&', '&amp;') + "</agencyname><agencycatid>" + agencycatid + "</agencycatid><agencyflag>1</agencyflag></track>";
            var url = appRoot + "TrackOrders/etrackingFiltersData";
            var param = {};
            param.xmlData = xmlString;
            var result = getresult(url, param);
            response($.map(result, function (item, aa) {
                return {
                    value: item.key,
                    key: item.value,
                }
            }))
        },
        minLength: 1,
        select: function (event, ui) {
            $("#agencyid").val(ui.item.key);
            agencyidvalue = ui.item.key;
        },
        //change: function (event, ui) {
        //    if (agencyidvalue == 0)
        //        $(this).val("");

        //}
    }).keyup(function (e) { if (e.keyCode != 13 && e.keyCode != 9 && !e.ctrlKey && e.keyCode != 27) agencyidvalue = 0; });
    $('#agencyid').click(function () {
        $(this).select();
    });
    $("#agencyid").change(function () { if ($(this).val() == '') if (this.id == 'agencyid') agencyidvalue = 0; });
    $("#agencynameid").autocomplete({
        source: function (request, response) {
            var isclassified = $("#hdnIsClassified").val();
            var logcentreid = $("#hdnlogcentreid").val();
            if (logcentreid == undefined || logcentreid == "") {
                logcentreid = 1;
            }
            var userid = $("#hdnuserid").val();
            if (userid == undefined || userid == "") {
                userid = 1;
            }
            var filterscreen = $("#hdnScreenId").val();
            if (filterscreen == undefined) {
                filterscreen = 1;
            }
            var agencycatid = $("#agencycatid").val();
            var parametername = $("#agencynameid").attr("parameter");
            var paramValue = $("#agencynameid").val();
            if (paramValue == null)
                paramValue = 0;
            var xmlString = "<track><actionname>" + parametername + "</actionname><isclassified>" + isclassified + "</isclassified>"
            xmlString += "<logcentreid>" + logcentreid + "</logcentreid><loguserid>" + userid + "</loguserid><screen>" + filterscreen + "</screen>"
            xmlString += "<agencyname>" + paramValue.replace('&', '&amp;') + "</agencyname><agencycatid>" + agencycatid + "</agencycatid><agencyflag>1</agencyflag></track>";
            var url = appRoot + "TrackOrders/etrackingFiltersData";
            var param = {};
            param.xmlData = xmlString;
            var result = getresult(url, param);
            response($.map(result, function (item, aa) {
                return {
                    value: item.key,
                    key: item.value,
                }
            }))
        },
        minLength: 1,
        select: function (event, ui) {
            $("#agencynameid").val(ui.item.key);
            agencyidvalue = ui.item.key;
        },
        change: function (event, ui) {
            if (agencyidvalue == 0)
                $(this).val("");

        },
        appendTo: $("#agencyFilter")
    }).keyup(function (e) { if (e.keyCode != 13 && e.keyCode != 9 && !e.ctrlKey && e.keyCode != 27) agencyidvalue = 0; });
    $('#agencynameid').click(function () {
        $(this).select();
    });
    $("#agencynameid").change(function () { if ($(this).val() == '') if (this.id == 'agencynameid') agencyidvalue = 0; });

    $("#canvassorid").autocomplete({
        source: function (request, response) {
            var isclassified = $("#hdnIsClassified").val();
            var logcentreid = $("#hdnlogcentreid").val();
            if (logcentreid == undefined || logcentreid == "") {
                logcentreid = 1;
            }
            var userid = $("#hdnuserid").val();
            if (userid == undefined || userid == "") {
                userid = 1;
            }
            var filterscreen = $("#hdnScreenId").val();
            if (filterscreen == undefined) {
                filterscreen = 1;
            }
            var canvassorid = $("#canvassorid").val();
            var parametername = $("#canvassorid").attr("parameter");
            var paramValue = $("#canvassorid").val();
            if (paramValue == null)
                paramValue = 0;
            var xmlString = "<track><actionname>" + parametername + "</actionname><isclassified>" + isclassified + "</isclassified>"
            xmlString += "<logcentreid>" + logcentreid + "</logcentreid><loguserid>" + userid + "</loguserid><screen>" + filterscreen + "</screen>"
            xmlString += "<agencyname>" + paramValue.replace('&', '&amp;') + "</agencyname></track>";
            var url = appRoot + "TrackOrders/etrackingFiltersData";
            var param = {};
            param.xmlData = xmlString;
            var result = getresult(url, param);
            response($.map(result, function (item, aa) {
                return {
                    value: item.key,
                    key: item.value,
                }
            }))
        },
        minLength: 1,
        maxHeight: 200,
        select: function (event, ui) {
            $("#canvassorid").val(ui.item.key);
            canvassoridvalue = ui.item.key;
        },
        //change: function (event, ui) {
        //    if (canvassoridvalue == 0)
        //        $(this).val("");

        //}
    }).keyup(function (e) { if (e.keyCode != 13 && e.keyCode != 9 && !e.ctrlKey && e.keyCode != 27) canvassoridvalue = 0; });
    $('#canvassorid').click(function () {
        $(this).select();
    });
    $("#canvassorid").change(function () { if ($(this).val() == '') if (this.id == 'canvassorid') canvassoridvalue = 0; });

    $('#adtypeidlist').on('change', function () {
        var isclassified = $("#hdnIsClassified").val();
        var logcentreid = $("#hdnlogcentreid").val();
        if (logcentreid == undefined || logcentreid == "") {
            logcentreid = 1;
        }
        var userid = $("#hdnuserid").val();
        if (userid == undefined || userid == "") {
            userid = 1;
        }
        var filterscreen = $("#hdnScreenId").val();
        if (filterscreen == undefined) {
            filterscreen = 1;
        }
        $("#adtypeid1").empty();
        $("#adtypeid2").empty();
        $("#adtypeid3").empty();
        $("#adtypeid4").empty();
        var adtypeidlist = $("#adtypeidlist").val();
        if (adtypeidlist != null) {
            if (adtypeidlist[0] == "multiselect-all")
                adtypeidlist.splice(0, 1);
        }
        if (adtypeidlist == null || ($("#adtypeidlist option").length == $("#adtypeidlist option:selected").length))
            adtypeidlist = 0;
        var parametername = $("#adtypeid1").attr("parameter");
        var paramValue = $("#adtypeid1").val();
        if (paramValue == null)
            paramValue = 0;
        var xmlString = "<track><actionname>" + parametername + "</actionname><isclassified>" + isclassified + "</isclassified>"
        xmlString += "<logcentreid>" + logcentreid + "</logcentreid><loguserid>" + userid + "</loguserid><screen>" + filterscreen + "</screen>"
        xmlString += "<parentadtypeid>" + adtypeidlist + "</parentadtypeid></track>";
        var url = appRoot + "TrackOrders/etrackingFiltersData";
        var param = {};
        param.xmlData = xmlString;
        var result = getresult(url, param);
        if (result.length > 0) {
            for (var m = 0; m < result.length; m++)
                $("#adtypeid1").append(new Option(result[m].key, result[m].value));
        }
        $('#adtypeid1').change();
    });

    $('#adtypeid1').change(function () {
        var isclassified = $("#hdnIsClassified").val();
        var logcentreid = $("#hdnlogcentreid").val();
        if (logcentreid == undefined || logcentreid == "") {
            logcentreid = 1;
        }
        var userid = $("#hdnuserid").val();
        if (userid == undefined || userid == "") {
            userid = 1;
        }
        var filterscreen = $("#hdnScreenId").val();
        if (filterscreen == undefined) {
            filterscreen = 1;
        }
        $("#adtypeid2").empty();
        var adtypeidlist = $("#adtypeid1").val();
        var parametername = $("#adtypeid2").attr("parameter");
        var paramValue = $("#adtypeid2").val();
        if (paramValue == null)
            paramValue = 0;
        var xmlString = "<track><actionname>" + parametername + "</actionname><isclassified>" + isclassified + "</isclassified>"
        xmlString += "<logcentreid>" + logcentreid + "</logcentreid><loguserid>" + userid + "</loguserid><screen>" + filterscreen + "</screen>"
        xmlString += "<parentadtypeid>" + adtypeidlist + "</parentadtypeid></track>";
        var url = appRoot + "TrackOrders/etrackingFiltersData";
        var param = {};
        param.xmlData = xmlString;
        var result = getresult(url, param);
        if (result.length > 0) {
            for (var m = 0; m < result.length; m++)
                $("#adtypeid2").append(new Option(result[m].key, result[m].value));
        }
        $('#adtypeid2').change();
    });

    $('#adtypeid2').change(function () {
        var isclassified = $("#hdnIsClassified").val();
        var logcentreid = $("#hdnlogcentreid").val();
        if (logcentreid == undefined || logcentreid == "") {
            logcentreid = 1;
        }
        var userid = $("#hdnuserid").val();
        if (userid == undefined || userid == "") {
            userid = 1;
        }
        var filterscreen = $("#hdnScreenId").val();
        if (filterscreen == undefined) {
            filterscreen = 1;
        }
        $("#adtypeid3").empty();
        var adtypeidlist = $("#adtypeid2").val();
        var parametername = $("#adtypeid3").attr("parameter");
        var paramValue = $("#adtypeid3").val();
        if (paramValue == null)
            paramValue = 0;
        var xmlString = "<track><actionname>" + parametername + "</actionname><isclassified>" + isclassified + "</isclassified>"
        xmlString += "<logcentreid>" + logcentreid + "</logcentreid><loguserid>" + userid + "</loguserid><screen>" + filterscreen + "</screen>"
        xmlString += "<parentadtypeid>" + adtypeidlist + "</parentadtypeid></track>";
        var url = appRoot + "TrackOrders/etrackingFiltersData";
        var param = {};
        param.xmlData = xmlString;
        var result = getresult(url, param);
        if (result.length > 0) {
            for (var m = 0; m < result.length; m++)
                $("#adtypeid3").append(new Option(result[m].key, result[m].value));
        }
        $('#adtypeid3').change();
    });

    $('#adtypeid3').change(function () {
        var isclassified = $("#hdnIsClassified").val();
        var logcentreid = $("#hdnlogcentreid").val();
        if (logcentreid == undefined || logcentreid == "") {
            logcentreid = 1;
        }
        var userid = $("#hdnuserid").val();
        if (userid == undefined || userid == "") {
            userid = 1;
        }
        var filterscreen = $("#hdnScreenId").val();
        if (filterscreen == undefined) {
            filterscreen = 1;
        }
        $("#adtypeid4").empty();
        var adtypeidlist = $("#adtypeid3").val();
        var parametername = $("#adtypeid4").attr("parameter");
        var paramValue = $("#adtypeid4").val();
        if (paramValue == null)
            paramValue = 0;
        var xmlString = "<track><actionname>" + parametername + "</actionname><isclassified>" + isclassified + "</isclassified>"
        xmlString += "<logcentreid>" + logcentreid + "</logcentreid><loguserid>" + userid + "</loguserid><screen>" + filterscreen + "</screen>"
        xmlString += "<parentadtypeid>" + adtypeidlist + "</parentadtypeid></track>";
        var url = appRoot + "TrackOrders/etrackingFiltersData";
        var param = {};
        param.xmlData = xmlString;
        var result = getresult(url, param);
        if (result.length > 0) {
            for (var m = 0; m < result.length; m++)
                $("#adtypeid4").append(new Option(result[m].key, result[m].value));
        }
    });
}

function BindOrdersButtonRights(appRoot) {
    var isclassified = $("#hdnIsClassified").val();
    var logcentreid = $("#hdnlogcentreid").val();
    if (logcentreid == undefined || logcentreid == "") {
        logcentreid = 1;
    }
    var userid = $("#hdnuserid").val();
    if (userid == undefined || userid == "") {
        userid = 1;
    }
    var filterscreen = $("#hdnScreenId").val();
    if (filterscreen == undefined) {
        filterscreen = 1;
    }
    var xmlString = "<track><actionname>userrights</actionname><isclassified>" + isclassified + "</isclassified>"
    xmlString += "<logcentreid>" + logcentreid + "</logcentreid><loguserid>" + userid + "</loguserid><screen>" + filterscreen + "</screen></track>";
    var url = appRoot + "TrackOrders/BindEtrackingRights";
    var param = {};
    param.xmlData = xmlString;
    var result = getresult(url, param);
    if (result.length > 0) {
        $("#hdnCancelRights").val(result[1][0]);
        $("#hdnSuspendRights").val(result[1][2]);
        $("#hdnReviveRights").val(result[1][4]);
    }
}

function ShowOrderstrackingData(appRoot, MainDiv) {
    $(".multiselect-clear-filter").click();
    $("#txttotalrecord").val('');
    $("#hdntxtroid").val('');
    $("#btnrevive").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
    $("#btncancel").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
    $("#btnsuspend").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
    $("#btnorderhistory").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
    $("#btnuserhistory").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
    $("#lnkExportData").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
    $("#lnkOpenBooking").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
    $('#divProcessingBox').dialog('open');
    $('#SummaryMainGrid').empty();
    var dateflag = $("#dateflag").val();
    var fromdate = $("#txtFromDate").val();
    var todate = $("#txtToDate").val();
    var isclassified = $("#hdnIsClassified").val();
    var logcentreid = $("#hdnlogcentreid").val();
    if (logcentreid == undefined || logcentreid == "") {
        logcentreid = 1;
    }
    var userid = $("#hdnuserid").val();
    if (userid == undefined || userid == "") {
        userid = 1;
    }
    var filterscreen = $("#hdnScreenId").val();
    if (filterscreen == undefined) {
        filterscreen = 1;
    }

    var serverDate = new Date();

    var fromroid = $("#rangeFrom4").val();
    if (fromroid == "" || fromroid == null) {
        fromroid = 0;
    }
    else if (fromroid.toString().length >= 1 && fromroid.toString().length <= 7) {
        var n = serverDate.getFullYear();
        fromroid = parseInt(n) * 1000000 + parseInt(fromroid);
        $("#rangeFrom4").val(fromroid);
    }

    var toroid = $("#rangeTo4").val();
    if (toroid == "" || toroid == null) {
        toroid = 0;
    }
    else if (toroid.toString().length >= 1 && toroid.toString().length <= 7) {
        var n = serverDate.getFullYear();
        toroid = parseInt(n) * 1000000 + parseInt(toroid);
        $("#rangeTo4").val(toroid);
    }


    var frombookingnum = $("#rangeFrom3").val();
    if (frombookingnum == "" || frombookingnum == null) {
        frombookingnum = 0;
    }
    else if (frombookingnum.toString().length >= 1 && frombookingnum.toString().length <= 7) {
        var n = serverDate.getFullYear() - 1000;
        frombookingnum = parseInt(n) * 1000000 + parseInt(frombookingnum);
        $("#rangeFrom3").val(frombookingnum);
    }

    var tobookingnum = $("#rangeTo3").val();
    if (tobookingnum == "" || tobookingnum == null) {
        tobookingnum = 0;
    }
    else if (tobookingnum.toString().length >= 1 && tobookingnum.toString().length <= 7) {
        var n = serverDate.getFullYear() - 1000;
        tobookingnum = parseInt(n) * 1000000 + parseInt(tobookingnum);
        $("#rangeTo3").val(tobookingnum);
    }


    var fromboxnum = $("#boxnumber").val();
    if (fromboxnum == "" || fromboxnum == null) {
        fromboxnum = 0;
    }
    var toboxnum = $("#boxnumber").val();
    if (toboxnum == "" || toboxnum == null) {
        toboxnum = 0;
    }

    var frominvoicenum = $("#rangeFrom1").val();
    if (frominvoicenum == "" || frominvoicenum == null) {
        frominvoicenum = 0;
    }
    else if (frominvoicenum.toString().length >= 1 && frominvoicenum.toString().length <= 7) {
        var n = serverDate.getYear() - 100;
        if (isclassified == "1")
            n = n + 10
        else
            n = n + 44
        frominvoicenum = parseInt(n) * 1000000 + parseInt(frominvoicenum);
        $("#rangeFrom1").val(frominvoicenum);
    }
    var toinvoicenum = $("#rangeTo1").val();
    if (toinvoicenum == "" || toinvoicenum == null) {
        toinvoicenum = 0;
    }
    else if (toinvoicenum.toString().length >= 1 && toinvoicenum.toString().length <= 7) {
        var n = serverDate.getYear() - 100;
        if (isclassified == "1")
            n = n + 10
        else
            n = n + 44
        toinvoicenum = parseInt(n) * 1000000 + parseInt(toinvoicenum);
        $("#rangeTo1").val(toinvoicenum);
    }

    var fromreceiptid = $("#rangeFrom5").val();
    if (fromreceiptid == "" || fromreceiptid == null) {
        fromreceiptid = 0;
    }
    else if (fromreceiptid.toString().length >= 1 && fromreceiptid.toString().length <= 7) {
        var n = serverDate.getYear();
        fromreceiptid = parseInt(n) * 1000000 + parseInt(fromreceiptid);
        $("#rangeFrom5").val(fromreceiptid);
    }

    var toreceiptid = $("#rangeTo5").val();
    if (toreceiptid == "" || toreceiptid == null) {
        toreceiptid = 0;
    }
    else if (toreceiptid.toString().length >= 1 && toreceiptid.toString().length <= 7) {
        var n = serverDate.getYear();
        toreceiptid = parseInt(n) * 1000000 + parseInt(toreceiptid);
        $("#rangeTo5").val(toreceiptid);
    }

    var machineid = $("#machineid").val();
    if (machineid == "" || machineid == null) {
        machineid = 0;
    }
    var productid = $("#productid").val();
    if (productid == "" || productid == null) {
        productid = 0;
    }
    var smeid = $("#smeid").val();
    if (smeid == "" || smeid == null) {
        smeid = 0;
    }
    var revenuecentreid = $("#revenuecentreid").val();
    if (revenuecentreid == "" || revenuecentreid == null) {
        revenuecentreid = 0;
    }
    var bookingcentreid = $("#bookingcentreid").val();
    if (bookingcentreid == "" || bookingcentreid == null) {
        bookingcentreid = 0;
    }
    var agencycatidlist = $("#agencycatid").val();
    if (agencycatidlist == "" || agencycatidlist == null) {
        agencycatidlist = 0;
    }
    var clientcatidlist = $("#clientcatid").val();
    if (clientcatidlist == "" || clientcatidlist == null) {
        clientcatidlist = 0;
    }
    var agencyid = agencyidvalue;
    if ($("#agencyid").val() == "" || agencyid == "" || agencyid == null) {
        agencyid = 0;
    }
    var clientid = clientidvalue;
    if ($("#clientid").val() == "" || clientid == "" || clientid == null) {
        clientid = 0;
    }
    var canvassorid = canvassoridvalue;
    if ($("#canvassorid").val() == "" || canvassorid == "" || canvassorid == null) {
        canvassorid = 0;
    }
    var ronumber = $("#ronumber").val();
    var adtypeidlist = $("#adtypeidlist").val();
    if (adtypeidlist != null) {
        if (adtypeidlist[0] == "multiselect-all")
            adtypeidlist.splice(0, 1);
    }
    if (adtypeidlist == null || ($("#adtypeidlist option").length == $("#adtypeidlist option:selected").length))
        adtypeidlist = 0;

    //var packageidlist = $("#packageidlist").val();
    //if (packageidlist != null) {
    //    if (packageidlist[0] == "multiselect-all")
    //        packageidlist.splice(0, 1);
    //}
    //if (packageidlist == null || ($("#packageidlist option").length == $("#packageidlist option:selected").length))
    //    packageidlist = 0;

    var packageidlist = $("#packageidlist").val();
    if (packageidlist == "" || packageidlist == null) {
        packageidlist = 0;
    }

    var peidlist = $("#peidlist").val();
    if (peidlist != null) {
        if (peidlist[0] == "multiselect-all")
            peidlist.splice(0, 1);
    }
    if (peidlist == null || ($("#peidlist option").length == $("#peidlist option:selected").length))
        peidlist = 0;

    var classification1 = $('#adtypeid1').val();
    if (classification1 == "" || classification1 == null) {
        classification1 = 0;
    }
    var classification2 = $('#adtypeid2').val();
    if (classification2 == "" || classification2 == null) {
        classification2 = 0;
    }
    var classification3 = $('#adtypeid3').val();
    if (classification3 == "" || classification3 == null) {
        classification3 = 0;
    }
    var classification4 = $('#adtypeid4').val();
    if (classification4 == "" || classification4 == null) {
        classification4 = 0;
    }

    var adsizeid = $("#adsizeid").val();
    if (adsizeid == "" || adsizeid == null) {
        adsizeid = 0;
    }
    var bookingexecid = $("#bookingexecid").val();
    if (bookingexecid == "" || bookingexecid == null) {
        bookingexecid = 0;
    }
    var premiaid = $("#premiaid").val();
    if (premiaid == "" || premiaid == null) {
        premiaid = -1;
    }
    var colorid = $("#colorid").val();
    if (colorid == "" || colorid == null) {
        colorid = -1;
    }
    var flag = $("#flag").val();
    if (flag == "" || flag == null) {
        flag = 0;
    }
    var orderstatus = $("#orderstatus").val();
    if (orderstatus == "" || orderstatus == null) {
        orderstatus = 0;
    }
    var billtypeid = $("#billtypeid").val();
    if (billtypeid == "" || billtypeid == null) {
        billtypeid = 0;
    }
    var stylesheetid = $("#stylesheetid").val();
    if (stylesheetid == "" || stylesheetid == null) {
        stylesheetid = 0;
    }
    var boxtypeid = $("#boxtypeid").val();
    if (boxtypeid == "" || boxtypeid == null) {
        boxtypeid = -1;
    }
    var paymenttypeid = $("#paymenttypeid").val();
    if (paymenttypeid == "" || paymenttypeid == null) {
        paymenttypeid = 0;
    }
    var customertypeid = $("#customertypeid").val();
    if (customertypeid == "" || customertypeid == null) {
        customertypeid = 0;
    }

    var xmlString = "<track><actionname>showddata</actionname>"
    xmlString += "<dateflag>" + dateflag + "</dateflag><fromdate>" + fromdate + "</fromdate><todate>" + todate + "</todate><isclassified>" + isclassified + "</isclassified>"
    xmlString += "<logcentreid>" + logcentreid + "</logcentreid><loguserid>" + userid + "</loguserid><screen>" + filterscreen + "</screen>"
    xmlString += "<fromroid>" + fromroid + "</fromroid><toroid>" + toroid + "</toroid><frombookingnum>" + frombookingnum + "</frombookingnum><tobookingnum>" + tobookingnum + "</tobookingnum>"
    xmlString += "<fromboxnum>" + fromboxnum + "</fromboxnum><toboxnum>" + toboxnum + "</toboxnum><frominvoicenum>" + frominvoicenum + "</frominvoicenum><toinvoicenum>" + toinvoicenum + "</toinvoicenum><fromreceiptid>" + fromreceiptid + "</fromreceiptid>"
    xmlString += "<toreceiptid>" + toreceiptid + "</toreceiptid><machineid>" + machineid + "</machineid><productid>" + productid + "</productid><smeid>" + smeid + "</smeid><revenuecentreid>" + revenuecentreid + "</revenuecentreid><bookingcentreid>" + bookingcentreid + "</bookingcentreid><agencycatidlist>" + agencycatidlist + "</agencycatidlist>"
    xmlString += "<clientcatidlist>" + clientcatidlist + "</clientcatidlist><agencyid>" + agencyid + "</agencyid><clientid>" + clientid + "</clientid><canvassorid>" + canvassorid + "</canvassorid>"
    xmlString += "<ronumber>" + ronumber + "</ronumber><stylesheetid>" + stylesheetid + "</stylesheetid><adtypeidlist>" + adtypeidlist + "</adtypeidlist><packageidlist>" + packageidlist + "</packageidlist><peidlist>" + peidlist + "</peidlist><adtype1>" + classification1 + "</adtype1><adtype2>" + classification2 + "</adtype2><adtype3>" + classification3 + "</adtype3><adtype4>" + classification4 + "</adtype4><premiaid>" + premiaid + "</premiaid>"
    xmlString += "<adsizeid>" + adsizeid + "</adsizeid><bookingexecid>" + bookingexecid + "</bookingexecid><colorid>" + colorid + "</colorid><paymentmode>" + flag + "</paymentmode><orderstatus>" + orderstatus + "</orderstatus><billtypeid>" + billtypeid + "</billtypeid><boxtypeid>" + boxtypeid + "</boxtypeid><paymenttypeid>" + paymenttypeid + "</paymenttypeid><customertypeid>" + customertypeid + "</customertypeid></track>";
    var url = appRoot + "TrackOrders/ShowEtrackingData";
    var param = {};
    param.xmlData = xmlString;
    param.id = 0;
    setTimeout(function () {
         var result = getresult(url, param);
        if (result.length > 1) {
            ShowMainGridData(result);
            $("#lnkExportData").css("background-color", "").css("pointer-events", "").css("cursor", "").css("color", "");
        }
        else {
            $('#SummaryMainGrid').css('text-align', 'center').html("No Record Found!!");
        }
        $('#divProcessingBox').dialog('close');

    }, 100);
}

function OrderOpentrackingData(appRoot, MainDiv) {
    var isclassified = $("#hdnIsClassified").val();
    var logcentreid = $("#hdnlogcentreid").val();
    if (logcentreid == undefined || logcentreid == "") {
        logcentreid = 1;
    }
    var userid = $("#hdnuserid").val();
    if (userid == undefined || userid == "") {
        userid = 1;
    }
    var filterscreen = $("#hdnScreenId").val();
    if (filterscreen == undefined) {
        filterscreen = 1;
    }


    if (isclassified == "0")
        selectedRows = gridOptions.api.getSelectedRows();
    else if (isclassified == "1")
        selectedRows = gridOptions1.api.getSelectedRows();
    else
        selectedRows = gridOptions2.api.getSelectedRows();
    selectedRows.forEach(function (selectedRow, index) {
        roid = selectedRow.ROID;
    });

    var xmlString = "<track><actionname>open</actionname>"
    xmlString += "<roid>" + roid + "</roid><moduleid>" + 6 + "</moduleid><isclassified>" + isclassified + "</isclassified>"
    xmlString += "<logcentreid>" + logcentreid + "</logcentreid><loguserid>" + userid + "</loguserid><screen>" + filterscreen + "</screen></track>";
    var url = appRoot + "TrackOrders/ShowEtrackingData";
    var param = {};
    param.xmlData = xmlString;
    param.id = 0;
    var result = getresult(url, param);
    window.location.href = 'http://192.168.15.25/ebooking/Booking/Booking';
    //if (result[1][0] == "0") {
    //    window.location.href = 'http://192.168.15.25/ebooking/Booking/Booking';
    //}
    //else {
    //    alert(result[1][1]);
    //    return false;
    //}
}

function CheckActionsOrderstrackingData(appRoot, MainDiv) {
    var isclassified = $("#hdnIsClassified").val();
    var logcentreid = $("#hdnlogcentreid").val();
    if (logcentreid == undefined || logcentreid == "") {
        logcentreid = 1;
    }
    var userid = $("#hdnuserid").val();
    if (userid == undefined || userid == "") {
        userid = 1;
    }
    var filterscreen = $("#hdnScreenId").val();
    if (filterscreen == undefined) {
        filterscreen = 1;
    }
    var actions = $("#hdnActions").val();

    if (isclassified == "0")
        selectedRows = gridOptions.api.getSelectedRows();
    else if (isclassified == "1")
        selectedRows = gridOptions1.api.getSelectedRows();
    else
        selectedRows = gridOptions2.api.getSelectedRows();
    selectedRows.forEach(function (selectedRow, index) {
        roid = selectedRow.ROID;
    });

    var xmlString = "<track><actionname>actionbutton</actionname>"
    xmlString += "<roid>" + roid + "</roid><isclassified>" + isclassified + "</isclassified>"
    xmlString += "<moduleid>" + 6 + "</moduleid><actionbutton>" + actions + "</actionbutton>"
    xmlString += "<logcentreid>" + logcentreid + "</logcentreid><loguserid>" + userid + "</loguserid><screen>" + filterscreen + "</screen></track>";
    var url = appRoot + "TrackOrders/ShowEtrackingData";
    var param = {};
    param.xmlData = xmlString;
    param.id = 0;
    var result = getresult(url, param);
    if (result[1][0] == "0") {
        if (actions == "1") {
            if ($("#hdnCancelRights").val() == "0") {
                ShowMsg("You do not have order cancellation rights", 0, true);
                return false;
            }
            else {
                ReasonRemarksfilters();
                $("#Cancelremarkid").val('');
                $("#Suspendremarkid").val('');
                $("#CancelReasonRemarksFilter").modal("show");
            }
        }
        else if (actions == "2") {
            if ($("#hdnSuspendRights").val() == "0") {
                ShowMsg("You do not have order suspend rights", 0, true);
                return false;
            }
            else {
                ReasonRemarksfilters();
                $("#Cancelremarkid").val('');
                $("#Suspendremarkid").val('');
                $("#SuspendReasonRemarksFilter").modal("show");
            }
        }
        else if (actions == "3") {
            if ($("#hdnReviveRights").val() == "0") {
                ShowMsg("You do not have order revive rights", 0, true);
                return false;
            }
            else {
                $("#ReviveFilter").modal("show");
            }
        }
    }
    else {
        ShowMsg(result[1][1], 0, true);
        return false;
    }
}

function CancelOrderstrackingData(appRoot, MainDiv) {
    $('#divProcessingBox').dialog('open');
    var isclassified = $("#hdnIsClassified").val();
    var logcentreid = $("#hdnlogcentreid").val();
    if (logcentreid == undefined || logcentreid == "") {
        logcentreid = 1;
    }
    var userid = $("#hdnuserid").val();
    if (userid == undefined || userid == "") {
        userid = 1;
    }
    var filterscreen = $("#hdnScreenId").val();
    if (filterscreen == undefined) {
        filterscreen = 1;
    }

    var reason = $("#Cancelresonid").val();
    var remark = $("#Cancelremarkid").val();

    if (isclassified == "0")
        selectedRows = gridOptions.api.getSelectedRows();
    else if (isclassified == "1")
        selectedRows = gridOptions1.api.getSelectedRows();
    else
        selectedRows = gridOptions2.api.getSelectedRows();
    selectedRows.forEach(function (selectedRow, index) {
        roid = selectedRow.ROID;
        ordertype = selectedRow.isClassified;
    });

    if (ordertype != "Classified")
        ordertype = 0;
    else
        ordertype = 1;

    var xmlString = "<track><actionname>cancel</actionname>"
    xmlString += "<roid>" + roid + "</roid><insnum>" + 0 + "</insnum><peid>" + 0 + "</peid><isclassified>" + isclassified + "</isclassified><ordertype>" + ordertype + "</ordertype>"
    xmlString += "<releaseid>" + 0 + "</releaseid><moduleid>" + 6 + "</moduleid><remarks>" + remark + "</remarks><reasonid>" + reason + "</reasonid>"
    xmlString += "<logcentreid>" + logcentreid + "</logcentreid><loguserid>" + userid + "</loguserid><screen>" + filterscreen + "</screen></track>";
    var url = appRoot + "TrackOrders/ShowEtrackingData";
    var param = {};
    param.xmlData = xmlString;
    param.id = 0;
    setTimeout(function () {
        var result = getresult(url, param);
        $('#divProcessingBox').dialog('close');
        if (result[1][0] == "0") {
            $("#CancelReasonRemarksFilter").modal("hide");
            $("#Cancelremarkid").val('');
            $("#Suspendremarkid").val('');
            ShowMsg(result[1][1], 1, true);
            ShowOrderstrackingData(appRoot, $('#SummaryMainGrid'));
            $("#btnrevive").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
            $("#btncancel").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
            $("#btnsuspend").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
            $("#btnorderhistory").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
            $("#btnuserhistory").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
            $("#lnkOpenBooking").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
        }
        else {
            ShowMsg(result[1][1], 0, true);
            $("#Cancelremarkid").val('');
            $("#Suspendremarkid").val('');
            $("#CancelReasonRemarksFilter").modal("show");
            return false;
        }
    }, 100);
}

function SuspendOrderstrackingData(appRoot, MainDiv) {
    $('#divProcessingBox').dialog('open');
    var isclassified = $("#hdnIsClassified").val();
    var logcentreid = $("#hdnlogcentreid").val();
    if (logcentreid == undefined || logcentreid == "") {
        logcentreid = 1;
    }
    var userid = $("#hdnuserid").val();
    if (userid == undefined || userid == "") {
        userid = 1;
    }
    var filterscreen = $("#hdnScreenId").val();
    if (filterscreen == undefined) {
        filterscreen = 1;
    }

    var reason = $("#Suspendreasonid").val();
    var remark = $("#Suspendremarkid").val();

    if (isclassified == "0")
        selectedRows = gridOptions.api.getSelectedRows();
    else if (isclassified == "1")
        selectedRows = gridOptions1.api.getSelectedRows();
    else
        selectedRows = gridOptions2.api.getSelectedRows();

    selectedRows.forEach(function (selectedRow, index) {
        roid = selectedRow.ROID;
        ordertype = selectedRow.isClassified;
    });

    if (ordertype != "Classified")
        ordertype = 0;
    else
        ordertype = 1;

    var xmlString = "<track><actionname>suspend</actionname>"
    xmlString += "<roid>" + roid + "</roid><insnum>" + 0 + "</insnum><peid>" + 0 + "</peid><isclassified>" + isclassified + "</isclassified><ordertype>" + ordertype + "</ordertype>"
    xmlString += "<releaseid>" + 0 + "</releaseid><moduleid>" + 6 + "</moduleid><remarks>" + remark + "</remarks><reasonid>" + reason + "</reasonid>"
    xmlString += "<logcentreid>" + logcentreid + "</logcentreid><loguserid>" + userid + "</loguserid><screen>" + filterscreen + "</screen></track>";
    var url = appRoot + "TrackOrders/ShowEtrackingData";
    var param = {};
    param.xmlData = xmlString;
    param.id = 0;
    setTimeout(function () {
        var result = getresult(url, param);
        $('#divProcessingBox').dialog('close');
        if (result[1][0] == "0") {
            $("#SuspendReasonRemarksFilter").modal("hide");
            $("#Cancelremarkid").val('');
            $("#Suspendremarkid").val('');
            ShowMsg(result[1][1], 1, true);
            ShowOrderstrackingData(appRoot, $('#SummaryMainGrid'));
            $("#btnrevive").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
            $("#btncancel").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
            $("#btnsuspend").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
            $("#btnorderhistory").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
            $("#btnuserhistory").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
            $("#lnkOpenBooking").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
        }
        else {
            ShowMsg(result[1][1], 0, true);
            $("#Cancelremarkid").val('');
            $("#Suspendremarkid").val('');
            $("#SuspendReasonRemarksFilter").modal("show");
            return false;
        }
    }, 100);
}

function ReviveOrderstrackingData(appRoot, MainDiv) {
    $('#divProcessingBox').dialog('open');
    var isclassified = $("#hdnIsClassified").val();
    var logcentreid = $("#hdnlogcentreid").val();
    if (logcentreid == undefined || logcentreid == "") {
        logcentreid = 1;
    }
    var userid = $("#hdnuserid").val();
    if (userid == undefined || userid == "") {
        userid = 1;
    }
    var filterscreen = $("#hdnScreenId").val();
    if (filterscreen == undefined) {
        filterscreen = 1;
    }

    var rescheduleflag;
    if ($("#RadioItem").is(':checked')) {
        rescheduleflag = 2;
    }
    else if ($("#RadioEdition").is(':checked')) {
        rescheduleflag = 3;
    }
    else if ($("#RadioOrder").is(':checked')) {
        rescheduleflag = 1;
    }

    var newschdate = tomorrowDate();

    if (isclassified == "0")
        selectedRows = gridOptions.api.getSelectedRows();
    else if (isclassified == "1")
        selectedRows = gridOptions1.api.getSelectedRows();
    else
        selectedRows = gridOptions2.api.getSelectedRows();

    selectedRows.forEach(function (selectedRow, index) {
        roid = selectedRow.ROID;
        oldschdate = selectedRow.BookingDate;
        ordertype = selectedRow.isClassified;
    });

    if (ordertype != "Classified")
        ordertype = 0;
    else
        ordertype = 1;

    var xmlString = "<track><actionname>revive</actionname>"
    xmlString += "<roid>" + roid + "</roid><insnum>" + 0 + "</insnum><peid>" + 0 + "</peid><isclassified>" + isclassified + "</isclassified><ordertype>" + ordertype + "</ordertype>"
    xmlString += "<releaseid>" + 0 + "</releaseid><moduleid>" + 6 + "</moduleid><actionflag>" + rescheduleflag + "</actionflag><oldschdate>" + oldschdate + "</oldschdate><newschdate>" + newschdate + "</newschdate>"
    xmlString += "<logcentreid>" + logcentreid + "</logcentreid><loguserid>" + userid + "</loguserid><screen>" + filterscreen + "</screen></track>";
    var url = appRoot + "TrackOrders/ShowEtrackingData";
    var param = {};
    param.xmlData = xmlString;
    param.id = 0;
    setTimeout(function () {
        var result = getresult(url, param);
        $('#divProcessingBox').dialog('close');
        if (result[1][0] == "0") {
            $("#ReviveFilter").modal("hide");
            $("#Cancelremarkid").val('');
            $("#Suspendremarkid").val('');
            ShowMsg(result[1][1], 1, true);
            ShowOrderstrackingData(appRoot, $('#SummaryMainGrid'));
            $("#btnrevive").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
            $("#btncancel").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
            $("#btnsuspend").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
            $("#btnorderhistory").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
            $("#btnuserhistory").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
            $("#lnkOpenBooking").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
        }
        else {
            ShowMsg(result[1][1], 0, true);
            $("#Cancelremarkid").val('');
            $("#Suspendremarkid").val('');
            $("#ReviveFilter").modal("show");
            return false;
        }
    }, 100);
}

function OrderhistorytrackingData(appRoot) {
    $('#divProcessingBox').dialog('open');
    $('#lblPopupData').empty();
    var isclassified = $("#hdnIsClassified").val();
    var logcentreid = $("#hdnlogcentreid").val();
    if (logcentreid == undefined || logcentreid == "") {
        logcentreid = 1;
    }
    var userid = $("#hdnuserid").val();
    if (userid == undefined || userid == "") {
        userid = 1;
    }
    var filterscreen = $("#hdnScreenId").val();
    if (filterscreen == undefined) {
        filterscreen = 1;
    }


    if (isclassified == "0")
        selectedRows = gridOptions.api.getSelectedRows();
    else if (isclassified == "1")
        selectedRows = gridOptions1.api.getSelectedRows();
    else
        selectedRows = gridOptions2.api.getSelectedRows();

    selectedRows.forEach(function (selectedRow, index) {
        roid = selectedRow.ROID;
    });

    var xmlString = "<track><actionname>orderhistory</actionname>"
    xmlString += "<roid>" + roid + "</roid><insnum>" + 0 + "</insnum><moduleid>" + 6 + "</moduleid><isclassified>" + isclassified + "</isclassified>"
    xmlString += "<logcentreid>" + logcentreid + "</logcentreid><loguserid>" + userid + "</loguserid><screen>" + filterscreen + "</screen></track>";
    var url = appRoot + "TrackOrders/ShowHistoryData";
    var param = {};
    param.xmlData = xmlString;
    param.id = 0;
    setTimeout(function () {
        var result = getresult(url, param);
        $('#divProcessingBox').dialog('close');
        if (result.length > 1) {
            var tableHtml = makeHistoryTable(result);
            $('#lblPopupData').append(tableHtml);
            $('#divPopUp').dialog('open');
        }
        else {
            $('#lblPopupData').css('text-align', 'center').html("No Record Found!!");
            $('#divPopUp').dialog('open');
            return false;
        }
    }, 100);
}

function OrdermylogtrackingData(appRoot) {
    $('#divProcessingBox').dialog('open');
    $('#lbllogPopupData').empty();
    var isclassified = $("#hdnIsClassified").val();
    var logcentreid = $("#hdnlogcentreid").val();
    if (logcentreid == undefined || logcentreid == "") {
        logcentreid = 1;
    }
    var userid = $("#hdnuserid").val();
    if (userid == undefined || userid == "") {
        userid = 1;
    }
    var filterscreen = $("#hdnScreenId").val();
    if (filterscreen == undefined) {
        filterscreen = 1;
    }


    if (isclassified == "0")
        selectedRows = gridOptions.api.getSelectedRows();
    else if (isclassified == "1")
        selectedRows = gridOptions1.api.getSelectedRows();
    else
        selectedRows = gridOptions2.api.getSelectedRows();

    selectedRows.forEach(function (selectedRow, index) {
        roid = selectedRow.ROID;
    });

    var xmlString = "<track><actionname>userhistory</actionname>"
    xmlString += "<roid>" + roid + "</roid><insnum>" + 0 + "</insnum><moduleid>" + 6 + "</moduleid><isclassified>" + isclassified + "</isclassified>"
    xmlString += "<logcentreid>" + logcentreid + "</logcentreid><loguserid>" + userid + "</loguserid><screen>" + filterscreen + "</screen></track>";
    var url = appRoot + "TrackOrders/ShowHistoryData";
    var param = {};
    param.xmlData = xmlString;
    param.id = 0;
    setTimeout(function () {
        var result = getresult(url, param);
        $('#divProcessingBox').dialog('close');
        if (result.length > 1) {
            var tableHtml = makeHistoryTable(result);
            $('#lbllogPopupData').append(tableHtml);
            $('#divlogPopUp').dialog('open');
        }
        else {
            $('#lbllogPopupData').css('text-align', 'center').html("No Record Found!!");
            $('#divlogPopUp').dialog('open');
            return false;
        }
    }, 100);
}

function makeHistoryTable(data) {
    var table = $("<table/>").addClass('tables');
    if (data.length > 1) {
        $.each(data, function (rowIndex, r) {
            var row = $("<tr/>");
            $.each(r, function (colIndex, c) {
                if (colIndex != 10)
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
function RefreshOrdertrackingData() {
    //  $(".block_one").load(".block_one *");
    window.location.reload(true);
}


var columnDefs = [

                { headerName: "Sr.No", field: "SerialNumber", width: 60, cellStyle: { 'text-align': 'center' }, pinned: true },
                { headerName: "ROID", field: "ROID", width: 80, tooltipField: "ROID", pinned: true },
                //{
                //    headerName: "ROID", field: "ROID", width: 80, tooltipField: "ROID", cellStyle: function (params) {
                //        if (params.node.data.PaymentMode == "Prepaid") {
                //            return { color: '#77d62e', fontWeight: 'bold' };
                //        } else {
                //            return null;
                //        }
                //    }, pinned: true
                //},
                { headerName: "BookingID", field: "SourceROID", width: 100, tooltipField: "SourceROID", pinned: true },
                { headerName: "RO Num", field: "RONumber", width: 80, tooltipField: "RONumber" },
                { headerName: "Agency", field: "AgencyName", width: 150, tooltipField: "AgencyName" },
                { headerName: "Client", field: "ClientName", width: 120, tooltipField: "ClientName" },
                { headerName: "Sched. Date", field: "ScheduledDate", width: 100, tooltipField: "ScheduledDate", comparator: dateComparator },
                { headerName: "Bill Size", field: "RoAdSize", width: 80, tooltipField: "RoAdSize" },
                { headerName: "Premia", field: "PremiaName", width: 80, tooltipField: "PremiaName" },
                { headerName: "Package", field: "PackageName", width: 80, tooltipField: "PackageName" },
                { headerName: "Sched. Instru.", field: "SchedulingInstructions", width: 120, tooltipField: "SchedulingInstructions" },
                { headerName: "Pre Vat", field: "PreVatAmount", width: 110, tooltipField: "PreVatAmount", cellStyle: { 'text-align': 'right' } },
                { headerName: "Vat", field: "VatAmount", width: 110, tooltipField: "VatAmount", cellStyle: { 'text-align': 'right' } },
                { headerName: "Net Amt", field: "Net", width: 110, tooltipField: "Net", cellStyle: { 'text-align': 'right' } },
                { headerName: "Ins No.", field: "InsNum", width: 80, tooltipField: "InsNum", cellStyle: { 'text-align': 'center' } },
                { headerName: "Color", field: "ColorName", width: 60, tooltipField: "ColorName" },
                { headerName: "Page No.", field: "ScheduledPageID", width: 90, tooltipField: "ScheduledPageID" },
                { headerName: "Canvassor", field: "CanvassorName", width: 90, tooltipField: "CanvassorName" },
                { headerName: "Bk Center", field: "BookingCenter", width: 90, tooltipField: "BookingCenter" },
                { headerName: "Booking Exec", field: "BookExecName", width: 120, tooltipField: "BookExecName" },
                { headerName: "AdType", field: "AdTypeName", width: 90, tooltipField: "AdTypeName" },
                //{ headerName: "Ad Classification", field: "isClassified", width: 150, tooltipField: "isClassified" },
                { headerName: "Style", field: "StyleSheetName", width: 60, tooltipField: "StyleSheetName" },
                { headerName: "MBody Size", field: "MBodycount", width: 100, tooltipField: "MBodycount" },
                { headerName: "Box Num", field: "BoxNumber", width: 100, tooltipField: "BoxNumber" },
                { headerName: "Box Address", field: "BoxAddress", width: 120, tooltipField: "BoxAddress" },
                { headerName: "Product", field: "ProductName", width: 80, tooltipField: "ProductName" },
                { headerName: "Pay Type", field: "PayType", width: 90, tooltipField: "PayType" },
                { headerName: "Receipt No.", field: "ReceiptID", width: 100, tooltipField: "ReceiptID" },
                { headerName: "Invoice No.", field: "InvoiceNumber", width: 100, tooltipField: "InvoiceNumber" },
                { headerName: "Payment Mode", field: "PaymentMode", width: 120, tooltipField: "PaymentMode" },
                { headerName: "Billing Instru.", field: "BillingInstruction", width: 150, tooltipField: "BillingInstruction" },
                { headerName: "Card Rate", field: "CardRate", width: 100, tooltipField: "CardRate", cellStyle: { 'text-align': 'right' } },
                { headerName: "Agency Old Code", field: "AgnOldCode", width: 150, tooltipField: "AgnOldCode" },
                { headerName: "Client Old Code", field: "ClientOldCode", width: 150, tooltipField: "ClientOldCode" },
                { headerName: "Canvasser Old Code", field: "CanvassorOldcode", width: 180, tooltipField: "CanvassorOldcode" },
                { headerName: "Tax Registration No.", field: "TaxRegisterationNumber", width: 180, tooltipField: "TaxRegisterationNumber" },
                { headerName: "Agency Category", field: "AgnCat", width: 150, tooltipField: "AgnCat" },
                { headerName: "Client Category", field: "ClientCat", width: 150, tooltipField: "ClientCat" },
                { headerName: "Canvassor Category", field: "CanvassorCat", width: 150, tooltipField: "CanvassorCat" },
                { headerName: "Booking Date", field: "BookingDate", width: 150, tooltipField: "BookingDate", comparator: dateComparator },
                { headerName: "Audited Agency", field: "AuditedAgency", width: 120, tooltipField: "AuditedAgency" },
                { headerName: "Audited Client", field: "AuditedClient", width: 120, tooltipField: "AuditedClient" },
                { headerName: "Order Type", field: "isClassified", width: 100, tooltipField: "isClassified" },
                { headerName: "CL Category1", field: "AdType1Name", width: 130, tooltipField: "AdType1Name" },
                { headerName: "CL Category2", field: "AdType2Name", width: 130, tooltipField: "AdType2Name" },
                { headerName: "CL Category3", field: "AdType3Name", width: 130, tooltipField: "AdType3Name" },
                { headerName: "CL Category4", field: "AdType4Name", width: 130, tooltipField: "AdType4Name" },
                { headerName: "Prepaid Cancelation Reason", field: "CancellationRemarks", width: 200, tooltipField: "CancellationRemarks" },
];
var gridOptions = {
    columnDefs: columnDefs,
    rowData: null,
    rowSelection: 'single',//'multiple',
    onSelectionChanged: DisplayCancelSuspend,
    enableColResize: true,
    enableSorting: true,
    enableFilter: true,
    getRowStyle: function (params) {
        if (params.node.data.PaymentMode == "Prepaid") {
            return { background: '#afabab' }
        }
    }
};

function ShowMainGridData(resultData) {
    var isclassified = $("#hdnIsClassified").val();
    $('#SummaryMainGrid').html('');
    var gridDiv = document.querySelector('#SummaryMainGrid');
    if (isclassified == "0")
        new agGrid.Grid(gridDiv, gridOptions);
    else if (isclassified == "1")
        new agGrid.Grid(gridDiv, gridOptions1);
    else
        new agGrid.Grid(gridDiv, gridOptions2);
    var Data = [];
    for (iRow = 1; iRow < resultData.length; iRow++) {

        var DataRow = {
            //"SerialNumber": (iRow < resultData.length - 1 ? iRow : ''),
            "SerialNumber": (iRow < resultData.length - 1 ? (resultData[iRow][15] == 'Prepaid' ? ('P ' + iRow) : iRow) : ''),
            "ROID": resultData[iRow][0],
            "BookingDate": resultData[iRow][1],
            "isClassified": (iRow < resultData.length - 1 ? (resultData[iRow][2] == '1' ? 'Classified' : 'Display') : ''),
            "BoxNumber": resultData[iRow][3],
            "BookingNum": resultData[iRow][4],
            "RONumber": resultData[iRow][5],
            "OrderStatus": resultData[iRow][6],
            "AgencyName": resultData[iRow][7],
            "CanvassorName": resultData[iRow][8],
            "ClientName": resultData[iRow][9],
            "AdTypeName": resultData[iRow][10],
            "MachineName": resultData[iRow][11],
            "RevenueCenter": resultData[iRow][12],
            "BookingCenter": resultData[iRow][13],
            "SMEName": resultData[iRow][14],
            "PaymentMode": resultData[iRow][15],
            "BillingType": resultData[iRow][16],
            "Net": parseFloat(resultData[iRow][17]).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"),
            "AgencyID": resultData[iRow][18],
            "ClientID": resultData[iRow][19],
            "BookingCentreID": resultData[iRow][20],
            "BrandID": resultData[iRow][21],
            "ProductID": resultData[iRow][22],
            "ROStatus": resultData[iRow][23],
            "SMEID": resultData[iRow][24],
            "RevenueCentreID": resultData[iRow][25],
            "CanvassorID": resultData[iRow][26],
            "BookingExecID": resultData[iRow][27],
            "BookExecName": resultData[iRow][28],
            "PackageName": resultData[iRow][29],
            "ProductName": resultData[iRow][30],
            "StyleSheetName": resultData[iRow][31],
            "AdTypeID": resultData[iRow][32],
            "PackageID": resultData[iRow][33],
            "StylesheetID": resultData[iRow][34],
            "RoAdSize": resultData[iRow][35],
            "ColorName": resultData[iRow][36],
            "Classification": resultData[iRow][37],
            "InsNum": resultData[iRow][38],
            "ScheduledDate": (resultData[iRow][23] < 256 ? resultData[iRow][39] : ''),
            "PremiaName": resultData[iRow][40],
            "SchedulingInstructions": resultData[iRow][41],
            "ScheduledPageID": resultData[iRow][42],
            "MBodycount": resultData[iRow][43],
            "BoxAddress": resultData[iRow][44],
            "InvoiceNumber": resultData[iRow][45],
            "CardRate": (iRow < resultData.length - 1 ? (parseFloat(resultData[iRow][46]).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")) : ''),
            "BillingInstruction": resultData[iRow][47],
            "AgnOldCode": resultData[iRow][48],
            "TaxRegisterationNumber": resultData[iRow][49],
            "AgnCat": resultData[iRow][50],
            "ReceiptID": resultData[iRow][51],
            "ClientOldCode": resultData[iRow][52],
            "ClientCat": resultData[iRow][53],
            "CanvassorOldcode": resultData[iRow][54],
            "CanvassorCat": resultData[iRow][55],
            "AuditedAgency": resultData[iRow][56],
            "AuditedClient": resultData[iRow][57],
            "PayType": resultData[iRow][58],
            "CancellationRemarks": resultData[iRow][59],
            "SourceROID": (resultData[iRow][60] == 0 ? '' : resultData[iRow][60]),
            "AdType1Name": resultData[iRow][61],
            "AdType2Name": resultData[iRow][62],
            "AdType3Name": resultData[iRow][63],
            "AdType4Name": resultData[iRow][64],
            "PreVatAmount": parseFloat(resultData[iRow][65]).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"),
            "VatAmount": parseFloat(resultData[iRow][66]).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"),

        };
        Data.push(DataRow);
    }
    $("#txttotalrecord").val(resultData.length - 2);
    if (isclassified == "0") {
        gridOptions.api.setRowData(Data);
        gridOptions.api.forEachNode(function (node) {
            if (node.data.ROID === selroid) {
                //  $('[row-index = "' + node.rowIndex + '"]').click();
                gridOptions.api.selectNode(node, true, true);
            }
        });
    }
    else if (isclassified == "1") {
        gridOptions1.api.setRowData(Data);
        gridOptions1.api.forEachNode(function (node) {
            if (node.data.ROID === selroid) {
                // $('[row-index = "' + node.rowIndex + '"]').click();
                gridOptions1.api.selectNode(node, true, true);
            }
        });
    }
    else {
        gridOptions2.api.setRowData(Data);
        gridOptions2.api.forEachNode(function (node) {
            if (node.data.ROID === selroid) {
                //  $('[row-index = "' + node.rowIndex + '"]').click();
                gridOptions2.api.selectNode(node, true, true);
            }
        });
    }
}

function RefreshData() {
    $('#filterBarTwo').find('input:text').val('');
    $('#filterBarTwo').find('span').css('visibility', 'hidden');
    $(".block_one *").prop('disabled', false).css("opacity", "");
    $(".booking_caleder ").css("pointer-events", "").css("opacity", "");
}

function DisplayCancelSuspend() {
    var isclassified = $("#hdnIsClassified").val();
    $("#btnopen").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
    $("#btnorderhistory").css("background-color", "").css("pointer-events", "").css("cursor", "").css("color", "");
    $("#btnuserhistory").css("background-color", "").css("pointer-events", "").css("cursor", "").css("color", "");
    $("#lnkOpenBooking").css("background-color", "").css("pointer-events", "").css("cursor", "").css("color", "");
    var rostatus;
    if (isclassified == "0")
        selectedRows = gridOptions.api.getSelectedRows();
    else if (isclassified == "1")
        selectedRows = gridOptions1.api.getSelectedRows();
    else
        selectedRows = gridOptions2.api.getSelectedRows();

    selectedRows.forEach(function (selectedRow, index) {
        rostatus = selectedRow.ROStatus;
        roid = selectedRow.ROID;
        adtype = selectedRow.AdTypeName;
        pe = selectedRow.PackageName;
        insnum = selectedRow.InsNum;
        bkcode = selectedRow.BookingCenter;
        bkdate = selectedRow.BookingDate;
        ronum = selectedRow.RONumber;
        schdate = selectedRow.ScheduledDate;
    });

    selroid = roid;
    $("#hdntxtroid").val(roid);
    if (rostatus == "512") {
        $("#btnrevive").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
        $("#btncancel").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
        $("#btnsuspend").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
    }
    else if (rostatus == "256") {
        $("#btnrevive").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
        $("#btnsuspend").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
        $("#btncancel").css("background-color", "").css("pointer-events", "").css("cursor", "").css("color", "");
    }
    else if (rostatus == undefined || rostatus == "") {
        $("#btnrevive").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
        $("#btncancel").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
        $("#btnsuspend").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
    }
    else {
        $("#btnrevive").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
        $("#btncancel").css("background-color", "").css("pointer-events", "").css("cursor", "").css("color", "");
        $("#btnsuspend").css("background-color", "").css("pointer-events", "").css("cursor", "").css("color", "");
    }
}

function tomorrowDate() {
    var today = new Date();
    var dd = today.getDate() + 1;
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }
    var newDate = dd + "/" + mm + "/" + yyyy;
    return newDate;
}

var columnDefs1 = [

                { headerName: "Sr.No", field: "SerialNumber", width: 60, cellStyle: { 'text-align': 'center' }, pinned: true },
                { headerName: "ROID", field: "ROID", width: 80, tooltipField: "ROID", pinned: true },
                //{
                //    headerName: "ROID", field: "ROID", width: 80, tooltipField: "ROID", cellStyle: function (params) {
                //        if (params.node.data.PaymentMode == "Prepaid") {
                //            return { color: '#77d62e', fontWeight: 'bold' };
                //        } else {
                //            return null;
                //        }
                //    }, pinned: true
                //},
                { headerName: "BookingID", field: "SourceROID", width: 100, tooltipField: "SourceROID", pinned: true },
                { headerName: "RO Num", field: "RONumber", width: 80, tooltipField: "RONumber" },
                { headerName: "Agency", field: "AgencyName", width: 150, tooltipField: "AgencyName" },
                { headerName: "Client", field: "ClientName", width: 120, tooltipField: "ClientName" },
                { headerName: "Sched. Date", field: "ScheduledDate", width: 100, tooltipField: "ScheduledDate", comparator: dateComparator },
                { headerName: "Bill Size", field: "RoAdSize", width: 80, tooltipField: "RoAdSize" },
                { headerName: "Premia", field: "PremiaName", width: 80, tooltipField: "PremiaName" },
                { headerName: "Package", field: "PackageName", width: 80, tooltipField: "PackageName" },
                { headerName: "Sched. Instru.", field: "SchedulingInstructions", width: 120, tooltipField: "SchedulingInstructions" },
                { headerName: "Pre Vat", field: "PreVatAmount", width: 110, tooltipField: "PreVatAmount", cellStyle: { 'text-align': 'right' } },
                { headerName: "Vat", field: "VatAmount", width: 110, tooltipField: "VatAmount", cellStyle: { 'text-align': 'right' } },
                { headerName: "Net Amt", field: "Net", width: 110, tooltipField: "Net", cellStyle: { 'text-align': 'right' } },
                { headerName: "Ins No.", field: "InsNum", width: 80, tooltipField: "InsNum", cellStyle: { 'text-align': 'center' } },
                { headerName: "Color", field: "ColorName", width: 60, tooltipField: "ColorName" },
                { headerName: "Page No.", field: "ScheduledPageID", width: 90, tooltipField: "ScheduledPageID" },
                { headerName: "Canvassor", field: "CanvassorName", width: 90, tooltipField: "CanvassorName" },
                { headerName: "Bk Center", field: "BookingCenter", width: 90, tooltipField: "BookingCenter" },
                { headerName: "Booking Exec", field: "BookExecName", width: 120, tooltipField: "BookExecName" },
                { headerName: "AdType", field: "AdTypeName", width: 90, tooltipField: "AdTypeName" },
                //{ headerName: "Ad Classification", field: "isClassified", width: 150, tooltipField: "isClassified" },
                { headerName: "Style", field: "StyleSheetName", width: 60, tooltipField: "StyleSheetName" },
                { headerName: "MBody Size", field: "MBodycount", width: 100, tooltipField: "MBodycount" },
                { headerName: "Box Num", field: "BoxNumber", width: 100, tooltipField: "BoxNumber" },
                { headerName: "Box Address", field: "BoxAddress", width: 120, tooltipField: "BoxAddress" },
                { headerName: "Product", field: "ProductName", width: 80, tooltipField: "ProductName" },
                { headerName: "Pay Type", field: "PayType", width: 90, tooltipField: "PayType" },
                { headerName: "Receipt No.", field: "ReceiptID", width: 100, tooltipField: "ReceiptID" },
                { headerName: "Invoice No.", field: "InvoiceNumber", width: 100, tooltipField: "InvoiceNumber" },
                { headerName: "Payment Mode", field: "PaymentMode", width: 120, tooltipField: "PaymentMode" },
                { headerName: "Billing Instru.", field: "BillingInstruction", width: 150, tooltipField: "BillingInstruction" },
                { headerName: "Card Rate", field: "CardRate", width: 100, tooltipField: "CardRate", cellStyle: { 'text-align': 'right' } },
                { headerName: "Agency Old Code", field: "AgnOldCode", width: 150, tooltipField: "AgnOldCode" },
                { headerName: "Client Old Code", field: "ClientOldCode", width: 150, tooltipField: "ClientOldCode" },
                { headerName: "Canvasser Old Code", field: "CanvassorOldcode", width: 180, tooltipField: "CanvassorOldcode" },
                { headerName: "Tax Registration No.", field: "TaxRegisterationNumber", width: 180, tooltipField: "TaxRegisterationNumber" },
                { headerName: "Agency Category", field: "AgnCat", width: 150, tooltipField: "AgnCat" },
                { headerName: "Client Category", field: "ClientCat", width: 150, tooltipField: "ClientCat" },
                { headerName: "Canvassor Category", field: "CanvassorCat", width: 150, tooltipField: "CanvassorCat" },
                { headerName: "Booking Date", field: "BookingDate", width: 150, tooltipField: "BookingDate", comparator: dateComparator },
                { headerName: "Audited Agency", field: "AuditedAgency", width: 120, tooltipField: "AuditedAgency" },
                { headerName: "Audited Client", field: "AuditedClient", width: 120, tooltipField: "AuditedClient" },
                { headerName: "Order Type", field: "isClassified", width: 100, tooltipField: "isClassified" },
                { headerName: "CL Category1", field: "AdType1Name", width: 130, tooltipField: "AdType1Name" },
                { headerName: "CL Category2", field: "AdType2Name", width: 130, tooltipField: "AdType2Name" },
                { headerName: "CL Category3", field: "AdType3Name", width: 130, tooltipField: "AdType3Name" },
                { headerName: "CL Category4", field: "AdType4Name", width: 130, tooltipField: "AdType4Name" },
                { headerName: "Prepaid Cancelation Reason", field: "CancellationRemarks", width: 200, tooltipField: "CancellationRemarks" },
];
var gridOptions1 = {
    columnDefs: columnDefs1,
    rowData: null,
    rowSelection: 'single',//'multiple',
    onSelectionChanged: DisplayCancelSuspend,
    enableColResize: true,
    enableSorting: true,
    enableFilter: true,
    getRowStyle: function (params) {
        if (params.node.data.PaymentMode == "Prepaid") {
            return { background: '#afabab' }
        }
    }
};

var columnDefs2 = [

                { headerName: "Sr.No", field: "SerialNumber", width: 60, cellStyle: { 'text-align': 'center' }, pinned: true },
                { headerName: "ROID", field: "ROID", width: 80, tooltipField: "ROID", pinned: true },
                { headerName: "BookingID", field: "SourceROID", width: 100, tooltipField: "SourceROID", pinned: true },
                { headerName: "RO Num", field: "RONumber", width: 80, tooltipField: "RONumber" },
                { headerName: "Agency", field: "AgencyName", width: 150, tooltipField: "AgencyName" },
                { headerName: "Client", field: "ClientName", width: 120, tooltipField: "ClientName" },
                { headerName: "Sched. Date", field: "ScheduledDate", width: 100, tooltipField: "ScheduledDate", comparator: dateComparator },
                { headerName: "Bill Size", field: "RoAdSize", width: 80, tooltipField: "RoAdSize" },
                { headerName: "Premia", field: "PremiaName", width: 80, tooltipField: "PremiaName" },
                { headerName: "Package", field: "PackageName", width: 80, tooltipField: "PackageName" },
                { headerName: "Sched. Instru.", field: "SchedulingInstructions", width: 120, tooltipField: "SchedulingInstructions" },
                { headerName: "Pre Vat", field: "PreVatAmount", width: 110, tooltipField: "PreVatAmount", cellStyle: { 'text-align': 'right' } },
                { headerName: "Vat", field: "VatAmount", width: 110, tooltipField: "VatAmount", cellStyle: { 'text-align': 'right' } },
                { headerName: "Net Amt", field: "Net", width: 110, tooltipField: "Net", cellStyle: { 'text-align': 'right' } },
                { headerName: "Ins No.", field: "InsNum", width: 80, tooltipField: "InsNum", cellStyle: { 'text-align': 'center' } },
                { headerName: "Color", field: "ColorName", width: 60, tooltipField: "ColorName" },
                { headerName: "Page No.", field: "ScheduledPageID", width: 90, tooltipField: "ScheduledPageID" },
                { headerName: "Canvassor", field: "CanvassorName", width: 90, tooltipField: "CanvassorName" },
                { headerName: "Bk Center", field: "BookingCenter", width: 90, tooltipField: "BookingCenter" },
                { headerName: "Booking Exec", field: "BookExecName", width: 120, tooltipField: "BookExecName" },
                { headerName: "AdType", field: "AdTypeName", width: 90, tooltipField: "AdTypeName" },
                //{ headerName: "Ad Classification", field: "isClassified", width: 150, tooltipField: "isClassified" },
                { headerName: "Style", field: "StyleSheetName", width: 60, tooltipField: "StyleSheetName" },
                { headerName: "MBody Size", field: "MBodycount", width: 100, tooltipField: "MBodycount" },
                { headerName: "Box Num", field: "BoxNumber", width: 100, tooltipField: "BoxNumber" },
                { headerName: "Box Address", field: "BoxAddress", width: 120, tooltipField: "BoxAddress" },
                { headerName: "Product", field: "ProductName", width: 80, tooltipField: "ProductName" },
                { headerName: "Pay Type", field: "PayType", width: 90, tooltipField: "PayType" },
                { headerName: "Receipt No.", field: "ReceiptID", width: 100, tooltipField: "ReceiptID" },
                { headerName: "Invoice No.", field: "InvoiceNumber", width: 100, tooltipField: "InvoiceNumber" },
                { headerName: "Payment Mode", field: "PaymentMode", width: 120, tooltipField: "PaymentMode" },
                { headerName: "Billing Instru.", field: "BillingInstruction", width: 150, tooltipField: "BillingInstruction" },
                { headerName: "Card Rate", field: "CardRate", width: 100, tooltipField: "CardRate", cellStyle: { 'text-align': 'right' } },
                { headerName: "Agency Old Code", field: "AgnOldCode", width: 150, tooltipField: "AgnOldCode" },
                { headerName: "Client Old Code", field: "ClientOldCode", width: 150, tooltipField: "ClientOldCode" },
                { headerName: "Canvasser Old Code", field: "CanvassorOldcode", width: 180, tooltipField: "CanvassorOldcode" },
                { headerName: "Tax Registration No.", field: "TaxRegisterationNumber", width: 180, tooltipField: "TaxRegisterationNumber" },
                { headerName: "Agency Category", field: "AgnCat", width: 150, tooltipField: "AgnCat" },
                { headerName: "Client Category", field: "ClientCat", width: 150, tooltipField: "ClientCat" },
                { headerName: "Canvassor Category", field: "CanvassorCat", width: 150, tooltipField: "CanvassorCat" },
                { headerName: "Booking Date", field: "BookingDate", width: 150, tooltipField: "BookingDate", comparator: dateComparator },
                { headerName: "Audited Agency", field: "AuditedAgency", width: 120, tooltipField: "AuditedAgency" },
                { headerName: "Audited Client", field: "AuditedClient", width: 120, tooltipField: "AuditedClient" },
                { headerName: "Order Type", field: "isClassified", width: 100, tooltipField: "isClassified" },
                { headerName: "CL Category1", field: "AdType1Name", width: 130, tooltipField: "AdType1Name" },
                { headerName: "CL Category2", field: "AdType2Name", width: 130, tooltipField: "AdType2Name" },
                { headerName: "CL Category3", field: "AdType3Name", width: 130, tooltipField: "AdType3Name" },
                { headerName: "CL Category4", field: "AdType4Name", width: 130, tooltipField: "AdType4Name" },
                { headerName: "Prepaid Cancelation Reason", field: "CancellationRemarks", width: 200, tooltipField: "CancellationRemarks" },
];
var gridOptions2 = {
    columnDefs: columnDefs2,
    rowData: null,
    rowSelection: 'single',//'multiple',
    onSelectionChanged: DisplayCancelSuspend,
    enableColResize: true,
    enableSorting: true,
    enableFilter: true,
    getRowStyle: function (params) {
        if (params.node.data.PaymentMode == "Prepaid") {
            return { background: '#afabab' }
        }
    }
};

//$('#lnkExportData').click(function () {
//    var isclassified = $("#hdnIsClassified").val();
//    if (isclassified == "0")
//        return gridOptions.api.exportDataAsExcel();
//    else if (isclassified == "1")
//        return gridOptions1.api.exportDataAsExcel();
//    else
//        return gridOptions2.api.exportDataAsExcel();
//});


function OrderOpenBookingData(EbookingRoot, MainDiv) {
    var ebookingpath = EbookingRoot + 'booking/booking?roid=' + $("#hdntxtroid").val();
    window.open(ebookingpath, 'eBooking');
    return false;
}

$('#lnkExportData').click(function () {
    var dateflag = $("#dateflag").val();
    var fromdate = $("#txtFromDate").val();
    var todate = $("#txtToDate").val();
    var isclassified = $("#hdnIsClassified").val();
    var logcentreid = $("#hdnlogcentreid").val();
    if (logcentreid == undefined || logcentreid == "") {
        logcentreid = 1;
    }
    var userid = $("#hdnuserid").val();
    if (userid == undefined || userid == "") {
        userid = 1;
    }
    var filterscreen = $("#hdnScreenId").val();
    if (filterscreen == undefined) {
        filterscreen = 1;
    }

    var serverDate = new Date();

    var fromroid = $("#rangeFrom4").val();
    if (fromroid == "" || fromroid == null) {
        fromroid = 0;
    }
    else if (fromroid.toString().length >= 1 && fromroid.toString().length <= 7) {
        var n = serverDate.getFullYear();
        fromroid = parseInt(n) * 1000000 + parseInt(fromroid);
        $("#rangeFrom4").val(fromroid);
    }

    var toroid = $("#rangeTo4").val();
    if (toroid == "" || toroid == null) {
        toroid = 0;
    }
    else if (toroid.toString().length >= 1 && toroid.toString().length <= 7) {
        var n = serverDate.getFullYear();
        toroid = parseInt(n) * 1000000 + parseInt(toroid);
        $("#rangeTo4").val(toroid);
    }


    var frombookingnum = $("#rangeFrom3").val();
    if (frombookingnum == "" || frombookingnum == null) {
        frombookingnum = 0;
    }
    else if (frombookingnum.toString().length >= 1 && frombookingnum.toString().length <= 7) {
        var n = serverDate.getFullYear() - 1000;
        frombookingnum = parseInt(n) * 1000000 + parseInt(frombookingnum);
        $("#rangeFrom3").val(frombookingnum);
    }

    var tobookingnum = $("#rangeTo3").val();
    if (tobookingnum == "" || tobookingnum == null) {
        tobookingnum = 0;
    }
    else if (tobookingnum.toString().length >= 1 && tobookingnum.toString().length <= 7) {
        var n = serverDate.getFullYear() - 1000;
        tobookingnum = parseInt(n) * 1000000 + parseInt(tobookingnum);
        $("#rangeTo3").val(tobookingnum);
    }


    var fromboxnum = $("#boxnumber").val();
    if (fromboxnum == "" || fromboxnum == null) {
        fromboxnum = 0;
    }
    var toboxnum = $("#boxnumber").val();
    if (toboxnum == "" || toboxnum == null) {
        toboxnum = 0;
    }

    var frominvoicenum = $("#rangeFrom1").val();
    if (frominvoicenum == "" || frominvoicenum == null) {
        frominvoicenum = 0;
    }
    else if (frominvoicenum.toString().length >= 1 && frominvoicenum.toString().length <= 7) {
        var n = serverDate.getYear() - 100;
        if (isclassified == "1")
            n = n + 10
        else
            n = n + 44
        frominvoicenum = parseInt(n) * 1000000 + parseInt(frominvoicenum);
        $("#rangeFrom1").val(frominvoicenum);
    }
    var toinvoicenum = $("#rangeTo1").val();
    if (toinvoicenum == "" || toinvoicenum == null) {
        toinvoicenum = 0;
    }
    else if (toinvoicenum.toString().length >= 1 && toinvoicenum.toString().length <= 7) {
        var n = serverDate.getYear() - 100;
        if (isclassified == "1")
            n = n + 10
        else
            n = n + 44
        toinvoicenum = parseInt(n) * 1000000 + parseInt(toinvoicenum);
        $("#rangeTo1").val(toinvoicenum);
    }

    var fromreceiptid = $("#rangeFrom5").val();
    if (fromreceiptid == "" || fromreceiptid == null) {
        fromreceiptid = 0;
    }
    else if (fromreceiptid.toString().length >= 1 && fromreceiptid.toString().length <= 7) {
        var n = serverDate.getYear();
        fromreceiptid = parseInt(n) * 1000000 + parseInt(fromreceiptid);
        $("#rangeFrom5").val(fromreceiptid);
    }

    var toreceiptid = $("#rangeTo5").val();
    if (toreceiptid == "" || toreceiptid == null) {
        toreceiptid = 0;
    }
    else if (toreceiptid.toString().length >= 1 && toreceiptid.toString().length <= 7) {
        var n = serverDate.getYear();
        toreceiptid = parseInt(n) * 1000000 + parseInt(toreceiptid);
        $("#rangeTo5").val(toreceiptid);
    }

    var machineid = $("#machineid").val();
    if (machineid == "" || machineid == null) {
        machineid = 0;
    }
    var productid = $("#productid").val();
    if (productid == "" || productid == null) {
        productid = 0;
    }
    var smeid = $("#smeid").val();
    if (smeid == "" || smeid == null) {
        smeid = 0;
    }
    var revenuecentreid = $("#revenuecentreid").val();
    if (revenuecentreid == "" || revenuecentreid == null) {
        revenuecentreid = 0;
    }
    var bookingcentreid = $("#bookingcentreid").val();
    if (bookingcentreid == "" || bookingcentreid == null) {
        bookingcentreid = 0;
    }
    var agencycatidlist = $("#agencycatid").val();
    if (agencycatidlist == "" || agencycatidlist == null) {
        agencycatidlist = 0;
    }
    var clientcatidlist = $("#clientcatid").val();
    if (clientcatidlist == "" || clientcatidlist == null) {
        clientcatidlist = 0;
    }
    var agencyid = agencyidvalue;
    if ($("#agencyid").val() == "" || agencyid == "" || agencyid == null) {
        agencyid = 0;
    }
    var clientid = clientidvalue;
    if ($("#clientid").val() == "" || clientid == "" || clientid == null) {
        clientid = 0;
    }
    var canvassorid = canvassoridvalue;
    if ($("#canvassorid").val() == "" || canvassorid == "" || canvassorid == null) {
        canvassorid = 0;
    }
    var ronumber = $("#ronumber").val();
    var adtypeidlist = $("#adtypeidlist").val();
    if (adtypeidlist != null) {
        if (adtypeidlist[0] == "multiselect-all")
            adtypeidlist.splice(0, 1);
    }
    if (adtypeidlist == null || ($("#adtypeidlist option").length == $("#adtypeidlist option:selected").length))
        adtypeidlist = 0;

    //var packageidlist = $("#packageidlist").val();
    //if (packageidlist != null) {
    //    if (packageidlist[0] == "multiselect-all")
    //        packageidlist.splice(0, 1);
    //}
    //if (packageidlist == null || ($("#packageidlist option").length == $("#packageidlist option:selected").length))
    //    packageidlist = 0;

    var packageidlist = $("#packageidlist").val();
    if (packageidlist == "" || packageidlist == null) {
        packageidlist = 0;
    }

    var peidlist = $("#peidlist").val();
    if (peidlist != null) {
        if (peidlist[0] == "multiselect-all")
            peidlist.splice(0, 1);
    }
    if (peidlist == null || ($("#peidlist option").length == $("#peidlist option:selected").length))
        peidlist = 0;

    var classification1 = $('#adtypeid1').val();
    if (classification1 == "" || classification1 == null) {
        classification1 = 0;
    }
    var classification2 = $('#adtypeid2').val();
    if (classification2 == "" || classification2 == null) {
        classification2 = 0;
    }
    var classification3 = $('#adtypeid3').val();
    if (classification3 == "" || classification3 == null) {
        classification3 = 0;
    }
    var classification4 = $('#adtypeid4').val();
    if (classification4 == "" || classification4 == null) {
        classification4 = 0;
    }

    var adsizeid = $("#adsizeid").val();
    if (adsizeid == "" || adsizeid == null) {
        adsizeid = 0;
    }
    var bookingexecid = $("#bookingexecid").val();
    if (bookingexecid == "" || bookingexecid == null) {
        bookingexecid = 0;
    }
    var premiaid = $("#premiaid").val();
    if (premiaid == "" || premiaid == null) {
        premiaid = -1;
    }
    var colorid = $("#colorid").val();
    if (colorid == "" || colorid == null) {
        colorid = -1;
    }
    var flag = $("#flag").val();
    if (flag == "" || flag == null) {
        flag = 0;
    }
    var orderstatus = $("#orderstatus").val();
    if (orderstatus == "" || orderstatus == null) {
        orderstatus = 0;
    }
    var billtypeid = $("#billtypeid").val();
    if (billtypeid == "" || billtypeid == null) {
        billtypeid = 0;
    }
    var stylesheetid = $("#stylesheetid").val();
    if (stylesheetid == "" || stylesheetid == null) {
        stylesheetid = 0;
    }
    var boxtypeid = $("#boxtypeid").val();
    if (boxtypeid == "" || boxtypeid == null) {
        boxtypeid = -1;
    }

    var xmlString = "<track><actionname>showddata</actionname>"
    xmlString += "<dateflag>" + dateflag + "</dateflag><fromdate>" + fromdate + "</fromdate><todate>" + todate + "</todate><isclassified>" + isclassified + "</isclassified>"
    xmlString += "<logcentreid>" + logcentreid + "</logcentreid><loguserid>" + userid + "</loguserid><screen>" + filterscreen + "</screen>"
    xmlString += "<fromroid>" + fromroid + "</fromroid><toroid>" + toroid + "</toroid><frombookingnum>" + frombookingnum + "</frombookingnum><tobookingnum>" + tobookingnum + "</tobookingnum>"
    xmlString += "<fromboxnum>" + fromboxnum + "</fromboxnum><toboxnum>" + toboxnum + "</toboxnum><frominvoicenum>" + frominvoicenum + "</frominvoicenum><toinvoicenum>" + toinvoicenum + "</toinvoicenum><fromreceiptid>" + fromreceiptid + "</fromreceiptid>"
    xmlString += "<toreceiptid>" + toreceiptid + "</toreceiptid><machineid>" + machineid + "</machineid><productid>" + productid + "</productid><smeid>" + smeid + "</smeid><revenuecentreid>" + revenuecentreid + "</revenuecentreid><bookingcentreid>" + bookingcentreid + "</bookingcentreid><agencycatidlist>" + agencycatidlist + "</agencycatidlist>"
    xmlString += "<clientcatidlist>" + clientcatidlist + "</clientcatidlist><agencyid>" + agencyid + "</agencyid><clientid>" + clientid + "</clientid><canvassorid>" + canvassorid + "</canvassorid>"
    xmlString += "<ronumber>" + ronumber + "</ronumber><stylesheetid>" + stylesheetid + "</stylesheetid><adtypeidlist>" + adtypeidlist + "</adtypeidlist><packageidlist>" + packageidlist + "</packageidlist><peidlist>" + peidlist + "</peidlist><adtype1>" + classification1 + "</adtype1><adtype2>" + classification2 + "</adtype2><adtype3>" + classification3 + "</adtype3><adtype4>" + classification4 + "</adtype4><premiaid>" + premiaid + "</premiaid>"
    xmlString += "<adsizeid>" + adsizeid + "</adsizeid><bookingexecid>" + bookingexecid + "</bookingexecid><colorid>" + colorid + "</colorid><paymentmode>" + flag + "</paymentmode><orderstatus>" + orderstatus + "</orderstatus><billtypeid>" + billtypeid + "</billtypeid><boxtypeid>" + boxtypeid + "</boxtypeid></track>";
    var url = appRoot + "TrackOrders/ShowEtrackingData";
    var param = {};
    param.xmlData = xmlString;
    param.id = 0;
    var result = getresult(url, param);
    if (result.length > 1)
        table = makeExcelTable(result);
    else {
        alert('No data to export!')
        return false;
    }
    exportTableToCSV.call(this, $(table), 'Export.csv');
    setTimeout(function () {
        $("#lnkExportData").attr("href", "#");
    }, 2000);
});

//function makeExcelTable(data) {
//    var table = $("<table/>").addClass('table');
//    $.each(data, function (rowIndex, r) {
//        var row = $("<tr/>");
//        $.each(r, function (colIndex, c) {
//            if (colIndex != 4 || colIndex != 7 || colIndex != 8 || colIndex != 17 || colIndex != 18 || colIndex != 19 || colIndex != 20 || colIndex != 21 || colIndex != 23 || colIndex != 24 || colIndex != 25 || colIndex != 27 || colIndex != 28 || colIndex != 29 || colIndex != 30 || colIndex != 31 || colIndex != 32 || colIndex != 33 || colIndex != 34 || colIndex != 35 || colIndex != 36 || colIndex != 37 || colIndex != 38 || colIndex != 39 || colIndex != 40 || colIndex != 41 || colIndex != 42 || colIndex != 43 || colIndex != 44 || colIndex != 46 || colIndex != 50 || colIndex != 53 || colIndex != 60 || colIndex != 61)
//                row.append($("<t" + (rowIndex == 0 ? "h" : "d") + "/>").text(c));
//        });
//        table.append(row);
//    });
//    return table;
//}

function makeExcelTable(data) {
    var table = $("<table/>").addClass('table');
    $.each(data, function (rowIndex, r) {
        var row = $("<tr/>");
        if (rowIndex == 0) {
            row.append($("<th/>").text("Sr.No"));
            row.append($("<th/>").text("ROID"));
            row.append($("<th/>").text("BookingID"));
            row.append($("<th/>").text("RO Num"));
            row.append($("<th/>").text("Agency"));
            row.append($("<th/>").text("Client"));
            row.append($("<th/>").text("Sched. Date"));
            row.append($("<th/>").text("Bill Size"));
            row.append($("<th/>").text("Premia"));
            row.append($("<th/>").text("Package"));
            row.append($("<th/>").text("Sched. Instr."));
            row.append($("<th/>").text("Net Amt"));
            row.append($("<th/>").text("Ins No."));
            row.append($("<th/>").text("Color"));
            row.append($("<th/>").text("Page No."));
            row.append($("<th/>").text("Canvassor"));
            row.append($("<th/>").text("Bk Center"));
            row.append($("<th/>").text("Booking Exec"));
            row.append($("<th/>").text("AdType"));
            row.append($("<th/>").text("Style"));
            row.append($("<th/>").text("MBody Size"));
            row.append($("<th/>").text("Box Num"));
            row.append($("<th/>").text("Box Address"));
            row.append($("<th/>").text("Product"));
            row.append($("<th/>").text("Pay Type"));
            row.append($("<th/>").text("Receipt No."));
            row.append($("<th/>").text("Invoice No."));
            row.append($("<th/>").text("Payment Mode"));
            row.append($("<th/>").text("Billing Instru."));
            row.append($("<th/>").text("Card Rate"));
            row.append($("<th/>").text("Agency Old Code"));
            row.append($("<th/>").text("Client Old Code"));
            row.append($("<th/>").text("Canvasser Old Code"));
            row.append($("<th/>").text("Tax Registration No."));
            row.append($("<th/>").text("Agency Category"));
            row.append($("<th/>").text("Client Category"));
            row.append($("<th/>").text("Canvassor Category"));
            row.append($("<th/>").text("Booking Date"));
            row.append($("<th/>").text("Audited Agency"));
            row.append($("<th/>").text("Audited Client"));
            row.append($("<th/>").text("Order Type"));
            row.append($("<th/>").text("CL Category1"));
            row.append($("<th/>").text("CL Category2"));
            row.append($("<th/>").text("CL Category3"));
            row.append($("<th/>").text("CL Category4"));
            row.append($("<th/>").text("Prepaid Cancelation Reason"));
        }
        else {
            if (rowIndex < data.length - 1) {
                row.append($("<td/>").text(r[15] == 'Prepaid' ? ('P ' + rowIndex) : ('=' + rowIndex + '&" "')));
            }
            else {
                row.append($("<td/>").text(""));
            }
            row.append($("<td/>").text(r[0]));
            row.append($("<td/>").text(r[60] == 0 ? '' : r[60]));
            row.append($("<td/>").text(r[5]));
            row.append($("<td/>").text(r[7]));
            row.append($("<td/>").text(r[9]));
            row.append($("<td/>").text(r[23] < 256 ? r[39] : ''));
            row.append($("<td/>").text(r[35]));
            row.append($("<td/>").text(r[40]));
            row.append($("<td/>").text(r[29]));
            row.append($("<td/>").text(r[41]));
            row.append($("<td/>").text(r[17]));
            row.append($("<td/>").text('="' + r[38] + '"'));
            row.append($("<td/>").text(r[36]));
            row.append($("<td/>").text(r[42]));
            row.append($("<td/>").text(r[8]));
            row.append($("<td/>").text(r[13]));
            row.append($("<td/>").text(r[28]));
            row.append($("<td/>").text(r[10]));
            row.append($("<td/>").text(r[31]));
            row.append($("<td/>").text(r[43]));
            row.append($("<td/>").text(r[3]));
            row.append($("<td/>").text(r[44]));
            row.append($("<td/>").text(r[30]));
            row.append($("<td/>").text(r[58]));
            row.append($("<td/>").text(r[51]));
            row.append($("<td/>").text(r[45]));
            row.append($("<td/>").text(r[15]));
            row.append($("<td/>").text(r[47]));
            row.append($("<td/>").text(r[46]));
            row.append($("<td/>").text(r[48]));
            row.append($("<td/>").text(r[52]));
            row.append($("<td/>").text(r[54]));
            row.append($("<td/>").text(r[49]));
            row.append($("<td/>").text(r[50]));
            row.append($("<td/>").text(r[53]));
            row.append($("<td/>").text(r[55]));
            row.append($("<td/>").text(r[1]));
            row.append($("<td/>").text(r[56]));
            row.append($("<td/>").text(r[57]));
            if (rowIndex < data.length - 1) {
                row.append($("<td/>").text(r[2] == '1' ? 'Classified' : 'Display'));
            }
            else {
                row.append($("<td/>").text(""));
            }
            row.append($("<td/>").text(r[61]));
            row.append($("<td/>").text(r[62]));
            row.append($("<td/>").text(r[63]));
            row.append($("<td/>").text(r[64]));
            row.append($("<td/>").text(r[59]));
        }
        table.append(row);
    });
    return table;
}

function dateComparator(date1, date2) {
    var date1Number = monthToComparableNumber(date1);
    var date2Number = monthToComparableNumber(date2);

    if (date1Number === null && date2Number === null) {
        return 0;
    }
    if (date1Number === null) {
        return -1;
    }
    if (date2Number === null) {
        return 1;
    }

    return date1Number - date2Number;
}

function monthToComparableNumber(date) {
    if (date === undefined || date === null || date.length !== 10) {
        return null;
    }

    var yearNumber = date.substring(6, 10);
    var monthNumber = date.substring(3, 5);
    var dayNumber = date.substring(0, 2);

    var result = (yearNumber * 10000) + (monthNumber * 100) + dayNumber;
    return result;
}

function ViewSearchAgencyDetail() {
    $('#SearchAgencyName').val('');
    $('#SearchAgencyCode').val('');
    $('#SearchAgencyCategory').val('');
    $('#SearchAgencyCity').val('');
    $('#SearchAgencyAddress').val('');
    $('#lblViewAgencyPopupData').empty();
    $('#divViewAgencyPopUp').dialog('open');
}


function SearchAgencyDetail() {
    $('#lblViewAgencyPopupData').html('');
    var url = appRoot + "TrackOrders/GetSearchAgencyData";
    var param = {};
    var SearchAgencyName = $('#SearchAgencyName').val();
    var SearchAgencyCode = $('#SearchAgencyCode').val();
    var SearchAgencyCategory = $('#SearchAgencyCategory').val();
    var SearchAgencyCity = $('#SearchAgencyCity').val();
    var SearchAgencyAddress = $('#SearchAgencyAddress').val();
    var IsClassified = $('#hdnIsClassified').val();

    var xmlString = "";
    xmlString += "<track><actionname>searchagency</actionname>"
        + "<searchname>" + SearchAgencyName + "</searchname>"
        + "<searchcode>" + SearchAgencyCode + "</searchcode>"
        + "<searchcategory>" + SearchAgencyCategory + "</searchcategory>"
        + "<searchcity>" + SearchAgencyCity + "</searchcity>"
        + "<searchaddress>" + SearchAgencyAddress + "</searchaddress>"
        + "<isclassified>" + IsClassified + "</isclassified>"
        + "</track>";
    param.xmlData = xmlString;
    param.id = 0;
    if (SearchAgencyName != '' || SearchAgencyCode != '' || SearchAgencyCategory != '' || SearchAgencyCity != '') {
        var result = getresult(url, param);
        if (result.length > 1) {
            var tableHtml = makeAgencySearchTable(result);
            $('#lblViewAgencyPopupData').append(tableHtml);
            $('#divViewAgencyPopUp').dialog('open');
        }
        else {
            $('#lblViewAgencyPopupData').css('text-align', 'center').html("No Record Found!!");
            $('#divViewAgencyPopUp').dialog('open');
            return false;
        }
    }
}

function ViewSearchClientDetail() {
    $('#SearchClientName').val('');
    $('#SearchClientID').val('');
    $('#SearchClientCity').val('');
    $('#SearchClientAddress').val('');
    $('#SearchClientOldCode').val('');
    $('#lblViewClientPopupData').empty();
    $('#divViewClientPopUp').dialog('open');
}

function SearchClientDetail() {
    $('#lblViewClientPopupData').html('');
    var url = appRoot + "TrackOrders/GetSearchClientData";
    var param = {};
    var SearchClientName = $('#SearchClientName').val();
    var SearchClientID = $('#SearchClientID').val();
    var SearchClientCity = $('#SearchClientCity').val();
    var SearchClientAddress = $('#SearchClientAddress').val();
    var SearchClientOldCode = $('#SearchClientOldCode').val();
    var IsClassified = $('#hdnIsClassified').val();

    var xmlString = "";
    xmlString += "<track><actionname>searchclient</actionname>"
        + "<searchname>" + SearchClientName + "</searchname>"
        + "<searchid>" + SearchClientID + "</searchid>"
        + "<searchcity>" + SearchClientCity + "</searchcity>"
        + "<searchaddress>" + SearchClientAddress + "</searchaddress>"
        + "<searchcode>" + SearchClientOldCode + "</searchcode>"
        + "<isclassified>" + IsClassified + "</isclassified>"
        + "</track>";
    param.xmlData = xmlString;
    param.id = 0;

    if (SearchClientName != '' || SearchClientID != '' || SearchClientCity != '' || SearchClientAddress != '' || SearchClientOldCode != '') {
        var result = getresult(url, param);
        if (result.length > 1) {
            var tableHtml = makeClientSearchTable(result);
            $('#lblViewClientPopupData').append(tableHtml);
            $('#divViewClientPopUp').dialog('open');
        }
        else {
            $('#lblViewClientPopupData').css('text-align', 'center').html("No Record Found!!");
            $('#divViewClientPopUp').dialog('open');
            return false;
        }
    }
}

function makeAgencySearchTable(data) {
    var table = $("<table/>").addClass('tables');
    if (data.length > 1) {
        $.each(data, function (rowIndex, r) {
            var row = $("<tr/>");
            $.each(r, function (colIndex, c) {
                if (data[0][colIndex] != 'Agency Name')
                    row.append($("<t" + (rowIndex == 0 ? "h" : "d onclick='SearchAgencyRow(this)'") + "/>").text(c));
                else
                    row.append($("<t" + (rowIndex == 0 ? "h" : "d onclick='SearchAgencyRow(this)'") + "/>").html('<span class="agency-search" title="' + c + '">' + c + '</span>'));


            });
            table.append(row);
        });
    }
    else {
        table = '<div class="error-box">Sorry !! No Record Found.</div>'
    }
    return table;
}


function SearchAgencyRow(th) {
    $('#lblViewAgencyPopupData').find('table tr').removeClass('rowSelected');
    $(th).parent().addClass('rowSelected');
}


function FillSearchAgency() {
    var searchagencyid = $('#lblViewAgencyPopupData').find('table tr.rowSelected').find('td:eq(0)')[0].textContent;
    var searchagencyname = $('#lblViewAgencyPopupData').find('table tr.rowSelected').find('td:eq(1)')[0].textContent;
    $('#agencyid').val(searchagencyname);
    agencyidvalue = searchagencyid;
    $('#agencyid').focus();
    $('#divViewAgencyPopUp').dialog('close');
}

function makeClientSearchTable(data) {
    var table = $("<table/>").addClass('tables');
    if (data.length > 1) {
        $.each(data, function (rowIndex, r) {
            var row = $("<tr/>");
            $.each(r, function (colIndex, c) {
                if (data[0][colIndex] != 'Client Name')
                    row.append($("<t" + (rowIndex == 0 ? "h" : "d onclick='SearchClientRow(this)'") + "/>").text(c));
                else
                    row.append($("<t" + (rowIndex == 0 ? "h" : "d onclick='SearchClientRow(this)'") + "/>").html('<span class="client-search" title="' + c + '">' + c + '</span>'));


            });
            table.append(row);
        });
    }
    else {
        table = '<div class="error-box">Sorry !! No Record Found.</div>'
    }
    return table;
}


function SearchClientRow(th) {
    $('#lblViewClientPopupData').find('table tr').removeClass('rowSelected');
    $(th).parent().addClass('rowSelected');
}

function FillSearchClient() {
    var searchclientid = $('#lblViewClientPopupData').find('table tr.rowSelected').find('td:eq(0)')[0].textContent;
    var searchclientname = $('#lblViewClientPopupData').find('table tr.rowSelected').find('td:eq(1)')[0].textContent;
    $('#clientid').val(searchclientname);
    clientidvalue = searchclientid;
    $('#clientid').focus();
    $('#divViewClientPopUp').dialog('close');
}