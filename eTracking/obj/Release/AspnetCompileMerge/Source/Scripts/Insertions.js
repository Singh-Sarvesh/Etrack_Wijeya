var agencyidvalue = 0;
var clientidvalue = 0;
var canvassoridvalue = 0;
var adtypeidvalue1 = 0;
var adtypeidvalue2 = 0;
var adtypeidvalue3 = 0;
var adtypeidvalue4 = 0;
var peidvalue = 0;
var billingpeidvalue = 0;
var selroid;
var selins;
var selpeid;

function Insertionspageload(appRoot) {
    var userid = $("#hdnuserid").val();
    if (userid == undefined || userid == null || userid == '') {
        UserLogOut();
    }
    else {
    BindInsertionsFiltersData(appRoot);
    AutoFillInsertionsagencyclientList(appRoot);
    BindInsertionsButtonRights(appRoot);
    BindInsertionsAdtypeData(appRoot);
     }
}

function BindInsertionsFiltersData(appRoot) {
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
        filterscreen = 2;
    }
    var allFilterElement = $('[newflag = "forXmltype"]');
    var allFilterElementLength = allFilterElement.length;
    for (var i = 0; i < allFilterElementLength; i++) {
        $("#" + allFilterElement[i].id).empty();
        $("#agencyid").empty();
        $("#clientid").empty();
        $("#clientid").empty();
        $("#adtypeid1").empty();
        $("#adtypeid2").empty()
        $("#adtypeid3").empty()
        $("#adtypeid4").empty()
        var parametername = $("#" + allFilterElement[i].id).attr("parameter");
        var paramValue = $("#" + allFilterElement[i].id).val();
        if (paramValue == null)
            paramValue = 0;
        var xmlString = "<track><actionname>" + parametername + "</actionname><isclassified>" + isclassified + "</isclassified>"
        xmlString += "<logcentreid>" + logcentreid + "</logcentreid><loguserid>" + userid + "</loguserid><screen>" + filterscreen + "</screen></track>";
        var url = appRoot + "TrackInsertions/etrackingFiltersData";
        var param = {};
        param.xmlData = xmlString;
        var result = getresult(url, param);
        if (result.length > 0) {
            for (var m = 0; m < result.length; m++)
                $("#" + allFilterElement[i].id).append(new Option(result[m].key, result[m].value));
        }
    }
}

function BindInsertionsAdtypeData(appRoot) {
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
        filterscreen = 2;
    }
    var allFilterElement = $('[newflag = "forXmlAdtype"]');
    var allFilterElementLength = allFilterElement.length;
    for (var i = 0; i < allFilterElementLength; i++) {
        $("#" + allFilterElement[i].id).empty();
        $("#agencyid").empty();
        $("#clientid").empty();
        $("#clientid").empty();
        $("#adtypeid1").empty();
        $("#adtypeid2").empty()
        $("#adtypeid3").empty()
        $("#adtypeid4").empty()
        var parametername = $("#" + allFilterElement[i].id).attr("parameter");
        var paramValue = $("#" + allFilterElement[i].id).val();
        if (paramValue == null)
            paramValue = 0;
        var xmlString = "<track><actionname>" + parametername + "</actionname><isclassified>" + isclassified + "</isclassified>"
        xmlString += "<logcentreid>" + logcentreid + "</logcentreid><loguserid>" + userid + "</loguserid><screen>" + filterscreen + "</screen></track>";
        var url = appRoot + "TrackInsertions/etrackingFiltersData";
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
        filterscreen = 2;
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
        var url = appRoot + "TrackInsertions/etrackingFiltersData";
        var param = {};
        param.xmlData = xmlString;
        var result = getresult(url, param);
        if (result.length > 0) {
            for (var m = 0; m < result.length; m++)
                $("#" + allFilterElement[i].id).append(new Option(result[m].key, result[m].value));
        }
    }
}

function AutoFillInsertionsagencyclientList(appRoot) {
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
                filterscreen = 2;
            }
            var clientcatid = $("#clientcatid").val();
            var parametername = $("#clientid").attr("parameter");
            var paramValue = $("#clientid").val();
            if (paramValue == null)
                paramValue = 0;
            var xmlString = "<track><actionname>" + parametername + "</actionname><isclassified>" + isclassified + "</isclassified>"
            xmlString += "<logcentreid>" + logcentreid + "</logcentreid><loguserid>" + userid + "</loguserid><screen>" + filterscreen + "</screen>"
            xmlString += "<clientname>" + paramValue.replace('&', '&amp;') + "</clientname><clientcatid>" + clientcatid + "</clientcatid><agencyflag>1</agencyflag></track>";
            var url = appRoot + "TrackInsertions/etrackingFiltersData";
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
        change: function (event, ui) {
            //if (clientidvalue == 0)
            //    $(this).val("");

            //if (ui.item == null) {
            //    clientidvalue = 111111111;
            //}
            //else {
            //    $("#clientid").val(ui.item.key);
            //    clientidvalue = ui.item.key;
            //}
        }
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
                filterscreen = 2;
            }
            var clientcatid = $("#clientcatid").val();
            var parametername = $("#clientnameid").attr("parameter");
            var paramValue = $("#clientnameid").val();
            if (paramValue == null)
                paramValue = 0;
            var xmlString = "<track><actionname>" + parametername + "</actionname><isclassified>" + isclassified + "</isclassified>"
            xmlString += "<logcentreid>" + logcentreid + "</logcentreid><loguserid>" + userid + "</loguserid><screen>" + filterscreen + "</screen>"
            xmlString += "<clientname>" + paramValue.replace('&', '&amp;') + "</clientname><clientcatid>" + clientcatid + "</clientcatid><agencyflag>1</agencyflag></track>";
            var url = appRoot + "TrackInsertions/etrackingFiltersData";
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
        appendTo: $("#clientFilter"),
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
                filterscreen = 2;
            }
            var agencycatid = $("#agencycatid").val();
            var parametername = $("#agencyid").attr("parameter");
            var paramValue = $("#agencyid").val();
            if (paramValue == null)
                paramValue = 0;
            var xmlString = "<track><actionname>" + parametername + "</actionname><isclassified>" + isclassified + "</isclassified>"
            xmlString += "<logcentreid>" + logcentreid + "</logcentreid><loguserid>" + userid + "</loguserid><screen>" + filterscreen + "</screen>"
            xmlString += "<agencyname>" + paramValue.replace('&', '&amp;') + "</agencyname><agencycatid>" + agencycatid + "</agencycatid><agencyflag>1</agencyflag></track>";
            var url = appRoot + "TrackInsertions/etrackingFiltersData";
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
        //    change: function (event, ui) {
        //        if (agencyidvalue == 0)
        //            $(this).val("");

        //    }
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
                filterscreen = 2;
            }
            var agencycatid = $("#agencycatid").val();
            var parametername = $("#agencynameid").attr("parameter");
            var paramValue = $("#agencynameid").val();
            if (paramValue == null)
                paramValue = 0;
            var xmlString = "<track><actionname>" + parametername + "</actionname><isclassified>" + isclassified + "</isclassified>"
            xmlString += "<logcentreid>" + logcentreid + "</logcentreid><loguserid>" + userid + "</loguserid><screen>" + filterscreen + "</screen>"
            xmlString += "<agencyname>" + paramValue.replace('&', '&amp;') + "</agencyname><agencycatid>" + agencycatid + "</agencycatid><agencyflag>1</agencyflag></track>";
            var url = appRoot + "TrackInsertions/etrackingFiltersData";
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
        appendTo: $("#agencyFilter"),
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
                filterscreen = 2;
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
            filterscreen = 2;
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
        //var paramValue = $("#adtypeid1").val();
        //if (paramValue == null)
        //    paramValue = 0;
        var xmlString = "<track><actionname>" + parametername + "</actionname><isclassified>" + isclassified + "</isclassified>"
        xmlString += "<logcentreid>" + logcentreid + "</logcentreid><loguserid>" + userid + "</loguserid><screen>" + filterscreen + "</screen>"
        xmlString += "<parentadtypeid>" + adtypeidlist + "</parentadtypeid></track>";
        var url = appRoot + "TrackInsertions/etrackingFiltersData";
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
            filterscreen = 2;
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
        var url = appRoot + "TrackInsertions/etrackingFiltersData";
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
            filterscreen = 2;
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
        var url = appRoot + "TrackInsertions/etrackingFiltersData";
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
            filterscreen = 2;
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
        var url = appRoot + "TrackInsertions/etrackingFiltersData";
        var param = {};
        param.xmlData = xmlString;
        var result = getresult(url, param);
        if (result.length > 0) {
            for (var m = 0; m < result.length; m++)
                $("#adtypeid4").append(new Option(result[m].key, result[m].value));
        }
    });

    //$("#adtypeid").autocomplete({
    //    source: function (request, response) {
    //        var isclassified = $("#hdnIsClassified").val();
    //        var logcentreid = $("#hdnlogcentreid").val();
    //        if (logcentreid == undefined || logcentreid == "") {
    //            logcentreid = 1;
    //        }
    //        var userid = $("#hdnuserid").val();
    //        if (userid == undefined || userid == "") {
    //            userid = 1;
    //        }
    //        var filterscreen = $("#hdnScreenId").val();
    //        if (filterscreen == undefined) {
    //            filterscreen = 2;
    //        }
    //        var adtypeidlist = $("#adtypeidlist").val();
    //        if (adtypeidlist != null) {
    //            if (adtypeidlist[0] == "multiselect-all")
    //                adtypeidlist.splice(0, 1);
    //        }
    //        if (adtypeidlist == null || ($("#adtypeidlist option").length == $("#adtypeidlist option:selected").length))
    //            adtypeidlist = 0;
    //        var parametername = $("#adtypeid").attr("parameter");
    //        var paramValue = $("#adtypeid").val();
    //        if (paramValue == null)
    //            paramValue = 0;
    //        var xmlString = "<track><actionname>" + parametername + "</actionname><isclassified>" + isclassified + "</isclassified>"
    //        xmlString += "<logcentreid>" + logcentreid + "</logcentreid><loguserid>" + userid + "</loguserid><screen>" + filterscreen + "</screen>"
    //        xmlString += "<adtypename>" + paramValue.replace('&', '&amp;') + "</adtypename><parentadtypeid>" + adtypeidlist + "</parentadtypeid></track>";
    //        var url = appRoot + "TrackInsertions/etrackingFiltersData";
    //        var param = {};
    //        param.xmlData = xmlString;
    //        var result = getresult(url, param);
    //        response($.map(result, function (item, aa) {
    //            return {
    //                value: item.key,
    //                key: item.value,
    //            }
    //        }))
    //    },
    //    minLength: 1,
    //    select: function (event, ui) {
    //        $("#adtypeid").val(ui.item.key);
    //        adtypeidvalue = ui.item.key;
    //    },
    //    change: function (event, ui) {
    //        if (adtypeidvalue == 0)
    //            $(this).val("");

    //    }
    //}).keyup(function (e) { if (e.keyCode != 13 && e.keyCode != 9 && !e.ctrlKey && e.keyCode != 27) adtypeidvalue = 0; });
    //$('#adtypeid').click(function () {
    //    $(this).select();
    //});
    //$("#adtypeid").change(function () { if ($(this).val() == '') if (this.id == 'adtypeid') adtypeidvalue = 0; });
}

function AutoFillInsertionsPEIDList(appRoot) {
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
        filterscreen = 2;
    }
    if (isclassified == "0")
        selectedRows = gridOptions.api.getSelectedRows();
    else if (isclassified == "1")
        selectedRows = gridOptions1.api.getSelectedRows();
    else
        selectedRows = gridOptions2.api.getSelectedRows();
    selectedRows.forEach(function (selectedRow, index) {
        insstatus = selectedRow.InsStatus;
        peid = selectedRow.PEID;
        schdate = selectedRow.ScheduledDate;
    });
    var today = $('#newpedate').val();
    if (Date.parse(today) > Date.parse(schdate)) {
        $('#newpedate').datepicker({ dateFormat: "dd/mm/yy", minDate: 0 }).datepicker("setDate", new Date());
        $('#billingdate').datepicker({ dateFormat: "dd/mm/yy", minDate: 0 }).datepicker("setDate", new Date());
    }
    else {
        $('#newpedate').datepicker({ dateFormat: "dd/mm/yy", minDate: 0 }).datepicker("setDate", schdate);
        $('#billingdate').datepicker({ dateFormat: "dd/mm/yy", minDate: 0 }).datepicker("setDate", schdate);
    }

    if (insstatus == "32") {
        ShowMsg('Positioned from Scheduling module. It cannot be transferred', 0, true);
        return false;
    }
    else
        $("#PEFilter").modal("show");
    var allFilterElement = $('[newflag = "forPeXmltype"]');
    var allFilterElementLength = allFilterElement.length;
    for (var i = 0; i < allFilterElementLength; i++) {
        $("#" + allFilterElement[i].id).empty();
        var parametername = $("#" + allFilterElement[i].id).attr("parameter");
        var paramValue = $("#" + allFilterElement[i].id).val();
        if (paramValue == null)
            paramValue = 0;
        var xmlString = "<track><actionname>" + parametername + "</actionname><isclassified>" + isclassified + "</isclassified>"
        xmlString += "<logcentreid>" + logcentreid + "</logcentreid><loguserid>" + userid + "</loguserid><screen>" + filterscreen + "</screen>"
        xmlString += "<peid>" + peid + "</peid></track>";
        var url = appRoot + "TrackInsertions/etrackingFiltersData";
        var param = {};
        param.xmlData = xmlString;
        var result = getresult(url, param);
        if (result.length > 0) {
            for (var m = 0; m < result.length; m++)
                $("#" + allFilterElement[i].id).append(new Option(result[m].key, result[m].value));
        }
        $("#" + allFilterElement[i].id).val(peid);
    }

}

function BindInsertionsButtonRights(appRoot) {
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
        filterscreen = 2;
    }
    var xmlString = "<track><actionname>userrights</actionname><isclassified>" + isclassified + "</isclassified>"
    xmlString += "<logcentreid>" + logcentreid + "</logcentreid><loguserid>" + userid + "</loguserid><screen>" + filterscreen + "</screen></track>";
    var url = appRoot + "TrackInsertions/BindEtrackingRights";
    var param = {};
    param.xmlData = xmlString;
    var result = getresult(url, param);
    if (result.length > 0) {
        $("#hdnCancelRights").val(result[1][1]);
        $("#hdnSuspendRights").val(result[1][3]);
        $("#hdnReviveRights").val(result[1][5]);
    }
}

function ShowInsertionstrackingData(appRoot, MainDiv) {
    $(".multiselect-clear-filter").click();
    $("#txttotalrecord").val('');
    $("#hdntxtroid").val('');
    $("#btnrevive").css("pointer-events", "none").css("background-color", "transparent").css("cursor", "not-allowed").css("color", "#fff");
    $("#btncancel").css("pointer-events", "none").css("background-color", "transparent").css("cursor", "not-allowed").css("color", "#fff");
    $("#btnsuspend").css("pointer-events", "none").css("background-color", "transparent").css("cursor", "not-allowed").css("color", "#fff");
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
        filterscreen = 2;
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
        fromreceiptid = parseInt(n) * 10000000 + parseInt(fromreceiptid);
        $("#rangeFrom5").val(fromreceiptid);
    }

    var toreceiptid = $("#rangeTo5").val();
    if (toreceiptid == "" || toreceiptid == null) {
        toreceiptid = 0;
    }
    else if (toreceiptid.toString().length >= 1 && toreceiptid.toString().length <= 7) {
        var n = serverDate.getYear();
        toreceiptid = parseInt(n) * 10000000 + parseInt(toreceiptid);
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
    var materialstatusid = $("#materialstatusid").val();
    if (materialstatusid == "" || materialstatusid == null) {
        materialstatusid = -1;
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
    xmlString += "<ronumber>" + ronumber + "</ronumber><stylesheetid>" + stylesheetid + "</stylesheetid><materialstatus>" + materialstatusid + "</materialstatus><adtypeidlist>" + adtypeidlist + "</adtypeidlist><packageidlist>" + packageidlist + "</packageidlist><peidlist>" + peidlist + "</peidlist><adtype1>" + classification1 + "</adtype1><adtype2>" + classification2 + "</adtype2><adtype3>" + classification3 + "</adtype3><adtype4>" + classification4 + "</adtype4><premiaid>" + premiaid + "</premiaid>"
    xmlString += "<adsizeid>" + adsizeid + "</adsizeid><bookingexecid>" + bookingexecid + "</bookingexecid><colorid>" + colorid + "</colorid><paymentmode>" + flag + "</paymentmode><orderstatus>" + orderstatus + "</orderstatus><billtypeid>" + billtypeid + "</billtypeid><boxtypeid>" + boxtypeid + "</boxtypeid><paymenttypeid>" + paymenttypeid + "</paymenttypeid><customertypeid>" + customertypeid + "</customertypeid></track>";
    var url = appRoot + "TrackInsertions/ShowEtrackingData";
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

function InsertionOpentrackingData(appRoot, MainDiv) {
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
        filterscreen = 2;
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
    var url = appRoot + "TrackInsertions/ShowEtrackingData";
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

function CheckCancelInsertionstrackingData(appRoot, MainDiv) {
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
        filterscreen = 2;
    }
    var actions = $('#hdnActions').val();

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
    var url = appRoot + "TrackInsertions/ShowEtrackingData";
    var param = {};
    param.xmlData = xmlString;
    param.id = 0;
    var result = getresult(url, param);
    if (result[1][0] == "0") {
        if (actions == "1") {
            if ($("#hdnCancelRights").val() == "0") {
                ShowMsg("You do not have Insert/Item cancellation rights", 0, true);
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
                ShowMsg("You do not have Insert/Item suspend rights", 0, true);
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
                ShowMsg("You do not have Insert/Item revive rights", 0, true);
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

function CancelInsertionstrackingData(appRoot, MainDiv) {
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
        filterscreen = 2;
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
        insnum = selectedRow.InsNum.split("/")[0];
        peid = selectedRow.PEID;
        releaseid = selectedRow.ReleaseID;
        ordertype = selectedRow.isClassified;
    });

    if (ordertype != "Classified")
        ordertype = 0;
    else
        ordertype = 1;

    var xmlString = "<track><actionname>cancel</actionname>"
    xmlString += "<roid>" + roid + "</roid><insnum>" + insnum + "</insnum><peid>" + peid + "</peid><isclassified>" + isclassified + "</isclassified><ordertype>" + ordertype + "</ordertype>"
    xmlString += "<releaseid>" + releaseid + "</releaseid><moduleid>" + 6 + "</moduleid><remarks>" + remark + "</remarks><reasonid>" + reason + "</reasonid>"
    xmlString += "<logcentreid>" + logcentreid + "</logcentreid><loguserid>" + userid + "</loguserid><screen>" + filterscreen + "</screen></track>";
    var url = appRoot + "TrackInsertions/ShowEtrackingData";
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
            ShowInsertionstrackingData(appRoot, $('#SummaryMainGrid'));
            // $("#btnrevive").hide();
            //$("#btnrevive").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
            //$("#btncancel").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
            //$("#btnsuspend").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
            //$("#btntransfer").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
            //$("#btnreschedule").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
            //$("#btnorderhistory").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
            //$("#btnuserhistory").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
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

function SuspendInsertionstrackingData(appRoot, MainDiv) {
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
        filterscreen = 2;
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
        insnum = selectedRow.InsNum.split("/")[0];
        peid = selectedRow.PEID;
        releaseid = selectedRow.ReleaseID;
        ordertype = selectedRow.isClassified;
    });

    if (ordertype != "Classified")
        ordertype = 0;
    else
        ordertype = 1;

    var xmlString = "<track><actionname>suspend</actionname>"
    xmlString += "<roid>" + roid + "</roid><insnum>" + insnum + "</insnum><peid>" + peid + "</peid><isclassified>" + isclassified + "</isclassified><ordertype>" + ordertype + "</ordertype>"
    xmlString += "<releaseid>" + 0 + "</releaseid><moduleid>" + 6 + "</moduleid><remarks>" + remark + "</remarks><reasonid>" + reason + "</reasonid>"
    xmlString += "<logcentreid>" + logcentreid + "</logcentreid><loguserid>" + userid + "</loguserid><screen>" + filterscreen + "</screen></track>";
    var url = appRoot + "TrackInsertions/ShowEtrackingData";
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
            ShowInsertionstrackingData(appRoot, $('#SummaryMainGrid'));
            //  $("#btnrevive").hide();
            //$("#btnrevive").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
            //$("#btncancel").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
            //$("#btnsuspend").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
            //$("#btntransfer").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
            //$("#btnreschedule").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
            //$("#btnorderhistory").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
            //$("#btnuserhistory").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
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

function ReviveInsertionstrackingData(appRoot, MainDiv) {
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
        filterscreen = 2;
    }

    var rescheduleflag;
    if ($("#RadioItem").is(':checked')) {
        rescheduleflag = 4;
    }
    else if ($("#RadioEdition").is(':checked')) {
        rescheduleflag = 3;
    }
    else if ($("#RadioInsertion").is(':checked')) {
        rescheduleflag = 2;
    }

    var newschdate = $('#txtRescheduleDate').val();

    if (isclassified == "0")
        selectedRows = gridOptions.api.getSelectedRows();
    else if (isclassified == "1")
        selectedRows = gridOptions1.api.getSelectedRows();
    else
        selectedRows = gridOptions2.api.getSelectedRows();
    selectedRows.forEach(function (selectedRow, index) {
        roid = selectedRow.ROID;
        insnum = selectedRow.InsNum.split("/")[0];
        peid = selectedRow.PEID;
        releaseid = selectedRow.ReleaseID;
        oldschdate = selectedRow.BookingDate;
        colorid = selectedRow.ColorID;
        productid = selectedRow.ProductID;
        premiaid = selectedRow.PremiaID;
        adtypeid = selectedRow.AdTypeID;
        brandid = selectedRow.BrandID;
        uom = selectedRow.UOM;
        adcolumns = selectedRow.AdColumns;
        adheight = selectedRow.AdHeight;
        ordertype = selectedRow.isClassified;
    });

    if (ordertype != "Classified")
        ordertype = 0;
    else
        ordertype = 1;

    var xmlString = "<track><actionname>revive</actionname>"
    xmlString += "<roid>" + roid + "</roid><insnum>" + insnum + "</insnum><peid>" + peid + "</peid><isclassified>" + isclassified + "</isclassified><ordertype>" + ordertype + "</ordertype>"
    xmlString += "<releaseid>" + 0 + "</releaseid><moduleid>" + 6 + "</moduleid><actionflag>" + rescheduleflag + "</actionflag><oldschdate>" + oldschdate + "</oldschdate><newschdate>" + newschdate + "</newschdate>"
    xmlString += "<colorid>" + colorid + "</colorid><productid>" + productid + "</productid><premiaid>" + premiaid + "</premiaid><adtypeid>" + adtypeid + "</adtypeid>"
    xmlString += "<brandid>" + brandid + "</brandid><uom>" + uom + "</uom><adcolumns>" + adcolumns + "</adcolumns><adheight>" + adheight + "</adheight>"
    xmlString += "<logcentreid>" + logcentreid + "</logcentreid><loguserid>" + userid + "</loguserid><screen>" + filterscreen + "</screen></track>";
    var url = appRoot + "TrackInsertions/ShowEtrackingData";
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
            ShowInsertionstrackingData(appRoot, $('#SummaryMainGrid'));
            // $("#btnrevive").hide();
            //$("#btnrevive").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
            //$("#btncancel").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
            //$("#btnsuspend").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
            //$("#btntransfer").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
            //$("#btnreschedule").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
            //$("#btnorderhistory").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
            //$("#btnuserhistory").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
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

function TransferInsertionstrackingData(appRoot, MainDiv) {

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
        filterscreen = 2;
    }

    var newpeid = $("#newpenameid").val();
    var newpedate = $('#newpedate').val();
    var newbilldate = $('#billingdate').val();
    var billingpeid = $("#billingpename").val();

    if (billingpeid == "" || billingpeid == null) {
        billingpeid = 0;
    }

    var rescheduleflag;
    if ($("#RadiopeItem").is(':checked')) {
        rescheduleflag = 4;
    }
    else if ($("#RadiopeEdition").is(':checked')) {
        rescheduleflag = 3;
    }
    else if ($("#RadiopeInsertion").is(':checked')) {
        rescheduleflag = 2;
    }

    if (isclassified == "0")
        selectedRows = gridOptions.api.getSelectedRows();
    else if (isclassified == "1")
        selectedRows = gridOptions1.api.getSelectedRows();
    else
        selectedRows = gridOptions2.api.getSelectedRows();
    selectedRows.forEach(function (selectedRow, index) {
        roid = selectedRow.ROID;
        insnum = selectedRow.InsNum.split("/")[0];
        peid = selectedRow.PEID;
        releaseid = selectedRow.ReleaseID;
        oldschdate = selectedRow.ScheduledDate;
        colorid = selectedRow.ColorID;
        productid = selectedRow.ProductID;
        premiaid = selectedRow.PremiaID;
        adtypeid = selectedRow.AdTypeID;
        brandid = selectedRow.BrandID;
        uom = selectedRow.UOM;
        adcolumns = selectedRow.AdColumns;
        adheight = selectedRow.AdHeight;
        ordertype = selectedRow.isClassified;
    });

    if (ordertype != "Classified")
        ordertype = 0;
    else
        ordertype = 1;

    var xmlString = "<track><actionname>transferad</actionname>"
    xmlString += "<roid>" + roid + "</roid><insnum>" + insnum + "</insnum><peid>" + peid + "</peid><newpeid>" + newpeid + "</newpeid><newbillingpeid>" + billingpeid + "</newbillingpeid><isclassified>" + isclassified + "</isclassified><ordertype>" + ordertype + "</ordertype>"
    xmlString += "<releaseid>" + 0 + "</releaseid><moduleid>" + 6 + "</moduleid><actionflag>" + rescheduleflag + "</actionflag><oldschdate>" + oldschdate + "</oldschdate><newschdate>" + newpedate + "</newschdate><newbillingdate>" + newbilldate + "</newbillingdate>"
    xmlString += "<colorid>" + colorid + "</colorid><productid>" + productid + "</productid><premiaid>" + premiaid + "</premiaid><adtypeid>" + adtypeid + "</adtypeid>"
    xmlString += "<brandid>" + brandid + "</brandid><uom>" + uom + "</uom><adcolumns>" + adcolumns + "</adcolumns><adheight>" + adheight + "</adheight>"
    xmlString += "<logcentreid>" + logcentreid + "</logcentreid><loguserid>" + userid + "</loguserid><screen>" + filterscreen + "</screen></track>";
    var url = appRoot + "TrackInsertions/ShowtransferEtrackingData";
    var param = {};
    param.xmlData = xmlString;
    param.id = 0;
    setTimeout(function () {
        var result = getresult(url, param);
        $('#divProcessingBox').dialog('close');
        if (result[1][0] == "0") {
            $("#PEFilter").modal("hide");
            $("#Cancelremarkid").val('');
            $("#Suspendremarkid").val('');
            $("#PEremarkid").val('');
            $("#penameid").val('');
            $("#peroid").val('');
            $("#peinsno").val('');
            $("#oldpenameid").val('');
            $("#newpenameid").val('');
            $("#billingpename").val('');
            ShowMsg(result[1][1], 1, true);
            selpeid = newpeid;
            ShowInsertionstrackingData(appRoot, $('#SummaryMainGrid'));
            if (isclassified == 0) {
                filetransfer(result[1][2], result[1][3], result[1][4], selroid, oldschdate, newpedate);
            }
            //$("#btnrevive").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
            //$("#btncancel").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
            //$("#btnsuspend").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
            //$("#btntransfer").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
            //$("#btnreschedule").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
            //$("#btnorderhistory").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
            //$("#btnuserhistory").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
        }
        else {
            ShowMsg(result[1][1], 0, true);
            $("#Cancelremarkid").val('');
            $("#Suspendremarkid").val('');
            $("#PEremarkid").val('');
            $("#penameid").val('');
            $("#PEFilter").modal("show");
            return false;
        }
    }, 100);
}

function filetransfer(source, destination, filename, selroid, oldschdate, newpedate) {
    var url = appRoot + "FileUpload/SaveUploadedFile";
    var param = {};
    param.sourcepath = source;
    param.destipath = destination;
    param.filename = filename;
    param.roid = selroid;
    param.oldschdate = oldschdate;
    param.newschdate = newpedate;
    param.id = 0;
    var result = getresult(url, param);
    if (result.Status == "1")
        ShowMsg(result.Message, 0, true);
}

function ReScheduleInsertionstrackingData(appRoot, MainDiv) {
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
        filterscreen = 2;
    }

    var rescheduleflag;
    if ($("#ReSchRadioItem").is(':checked')) {
        rescheduleflag = 4;
    }
    else if ($("#ReSchRadioEdition").is(':checked')) {
        rescheduleflag = 3;
    }
    else if ($("#ReSchRadioInsertion").is(':checked')) {
        rescheduleflag = 2;
    }

    var newschdate = $('#txtRescheduleAdDate').val();

    var reason = $("#ReSchedulereasonid").val();

    if (isclassified == "0")
        selectedRows = gridOptions.api.getSelectedRows();
    else if (isclassified == "1")
        selectedRows = gridOptions1.api.getSelectedRows();
    else
        selectedRows = gridOptions2.api.getSelectedRows();
    selectedRows.forEach(function (selectedRow, index) {
        roid = selectedRow.ROID;
        insnum = selectedRow.InsNum.split("/")[0];
        peid = selectedRow.PEID;
        releaseid = selectedRow.ReleaseID;
        oldschdate = selectedRow.ScheduledDate;
        colorid = selectedRow.ColorID;
        productid = selectedRow.ProductID;
        premiaid = selectedRow.PremiaID;
        adtypeid = selectedRow.AdTypeID;
        brandid = selectedRow.BrandID;
        uom = selectedRow.UOM;
        adcolumns = selectedRow.AdColumns;
        adheight = selectedRow.AdHeight;
        ordertype = selectedRow.isClassified;
    });

    if (ordertype != "Classified")
        ordertype = 0;
    else
        ordertype = 1;

    var today = $('#txtRescheduleAdDate').val();
    if (Date.parse(today) > Date.parse(oldschdate)) {
        $('#txtRescheduleAdDate').datepicker({ dateFormat: "dd/mm/yy", minDate: 0 }).datepicker("setDate", new Date());
    }
    else {
        $('#txtRescheduleAdDate').datepicker({ dateFormat: "dd/mm/yy", minDate: 1 }).datepicker("setDate", oldschdate);
    }

    var xmlString = "<track><actionname>reschedulead</actionname>"
    xmlString += "<roid>" + roid + "</roid><insnum>" + insnum + "</insnum><peid>" + peid + "</peid><isclassified>" + isclassified + "</isclassified><ordertype>" + ordertype + "</ordertype>"
    xmlString += "<releaseid>" + 0 + "</releaseid><moduleid>" + 6 + "</moduleid><actionflag>" + rescheduleflag + "</actionflag><reasonid>" + reason + "</reasonid><oldschdate>" + oldschdate + "</oldschdate><newschdate>" + newschdate + "</newschdate>"
    xmlString += "<colorid>" + colorid + "</colorid><productid>" + productid + "</productid><premiaid>" + premiaid + "</premiaid><adtypeid>" + adtypeid + "</adtypeid>"
    xmlString += "<brandid>" + brandid + "</brandid><uom>" + uom + "</uom><adcolumns>" + adcolumns + "</adcolumns><adheight>" + adheight + "</adheight>"
    xmlString += "<logcentreid>" + logcentreid + "</logcentreid><loguserid>" + userid + "</loguserid><screen>" + filterscreen + "</screen></track>";
    var url = appRoot + "TrackInsertions/ShowEtrackingData";
    var param = {};
    param.xmlData = xmlString;
    param.id = 0;
    setTimeout(function () {
        var result = getresult(url, param);
        $('#divProcessingBox').dialog('close');
        if (result[1][0] == "0") {
            $("#ReScheduleFilter").modal("hide");
            $("#Cancelremarkid").val('');
            $("#Suspendremarkid").val('');
            $("#PEremarkid").val('');
            ShowMsg(result[1][1], 1, true);
            ShowInsertionstrackingData(appRoot, $('#SummaryMainGrid'));
            //$("#btnrevive").hide();
            //$("#btnrevive").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
            //$("#btncancel").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
            //$("#btnsuspend").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
            //$("#btntransfer").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
            //$("#btnreschedule").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
            //$("#btnorderhistory").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
            //$("#btnuserhistory").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
        }
        else {
            ShowMsg(result[1][1], 0, true);
            $("#Cancelremarkid").val('');
            $("#Suspendremarkid").val('');
            $("#PEremarkid").val('');
            $("#ReScheduleFilter").modal("show");
            return false;
        }
    }, 100);
}

function InsertionhistorytrackingData(appRoot, MainDiv) {
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
        filterscreen = 2;
    }

    if (isclassified == "0")
        selectedRows = gridOptions.api.getSelectedRows();
    else if (isclassified == "1")
        selectedRows = gridOptions1.api.getSelectedRows();
    else
        selectedRows = gridOptions2.api.getSelectedRows();
    selectedRows.forEach(function (selectedRow, index) {
        roid = selectedRow.ROID;
        insnum = selectedRow.InsNum.split("/")[0];
    });

    var xmlString = "<track><actionname>orderhistory</actionname>"
    xmlString += "<roid>" + roid + "</roid><insnum>" + insnum + "</insnum><moduleid>" + 6 + "</moduleid><isclassified>" + isclassified + "</isclassified>"
    xmlString += "<logcentreid>" + logcentreid + "</logcentreid><loguserid>" + userid + "</loguserid><screen>" + filterscreen + "</screen></track>";
    var url = appRoot + "TrackInsertions/ShowHistoryData";
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

function InsertionmylogtrackingData(appRoot, MainDiv) {
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
        filterscreen = 2;
    }

    if (isclassified == "0")
        selectedRows = gridOptions.api.getSelectedRows();
    else if (isclassified == "1")
        selectedRows = gridOptions1.api.getSelectedRows();
    else
        selectedRows = gridOptions2.api.getSelectedRows();
    selectedRows.forEach(function (selectedRow, index) {
        roid = selectedRow.ROID;
        insnum = selectedRow.InsNum.split("/")[0];
    });

    var xmlString = "<track><actionname>userhistory</actionname>"
    xmlString += "<roid>" + roid + "</roid><insnum>" + insnum + "</insnum><moduleid>" + 6 + "</moduleid><isclassified>" + isclassified + "</isclassified>"
    xmlString += "<logcentreid>" + logcentreid + "</logcentreid><loguserid>" + userid + "</loguserid><screen>" + filterscreen + "</screen></track>";
    var url = appRoot + "TrackInsertions/ShowHistoryData";
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
    // $("#fulldiv").load(" #fulldiv");
    window.location.reload(true);
}


var columnDefs = [

    { headerName: "Sr.No", field: "SerialNumber", width: 60, cellStyle: { 'text-align': 'center' }, pinned: true },
    { headerName: "ROID", field: "ROID", width: 80, tooltipField: "ROID", pinned: true },
    //{
    //    headerName: "ROID", field: "ROID", width: 80, tooltipField: "ROID", cellStyle: function (params) {
    //        if (params.node.data.PaymentMode == "Prepaid") {
    //            return { color: '#77d62e',fontWeight:'bold' };
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
    { headerName: "Bill Size", field: "AdSize", width: 80, tooltipField: "AdSize" },
    { headerName: "Premia", field: "PremiaName", width: 80, tooltipField: "PremiaName" },
    { headerName: "Package", field: "Package", width: 80, tooltipField: "Package" },
    { headerName: "Sched. Instr.", field: "SchedulingInstructions", width: 120, tooltipField: "SchedulingInstructions" },
    { headerName: "Pre Vat", field: "PreVatAmount", width: 110, tooltipField: "PreVatAmount", cellStyle: { 'text-align': 'right' } },
    { headerName: "Vat", field: "VatAmount", width: 110, tooltipField: "VatAmount", cellStyle: { 'text-align': 'right' } },
    { headerName: "Net Amt", field: "NetAmount", width: 110, tooltipField: "NetAmount", cellStyle: { 'text-align': 'right' } },
    { headerName: "Ins No.", field: "InsNum", width: 80, tooltipField: "InsNum", cellStyle: { 'text-align': 'center' } },
    { headerName: "Color", field: "Color", width: 60, tooltipField: "Color" },
    { headerName: "Page No.", field: "ScheduledPageID", width: 90, tooltipField: "ScheduledPageID" },
    { headerName: "Canvassor", field: "CanvassorName", width: 90, tooltipField: "CanvassorName" },
    { headerName: "Bk Center", field: "BookingCenter", width: 90, tooltipField: "BookingCenter" },
    { headerName: "Booking Exec", field: "BookExecName", width: 120, tooltipField: "BookExecName" },
    { headerName: "AdType", field: "AdTypeName", width: 90, tooltipField: "AdTypeName" },
    //{ headerName: "Ad Classification", field: "isClassified", width: 150, tooltipField: "isClassified" },
    { headerName: "Style", field: "StyleSheet", width: 60, tooltipField: "StyleSheet" },
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
    { headerName: "Audited Agency", field: "AuditedAgency", width: 140, tooltipField: "AuditedAgency" },
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
            "SerialNumber": (iRow < resultData.length - 1 ? (resultData[iRow][49] == 'Prepaid' ? ('P ' + iRow) : iRow) : ''),
            "ROID": resultData[iRow][0],
            "isClassified": (iRow < resultData.length - 1 ? (resultData[iRow][1] == '1' ? 'Classified' : 'Display') : ''),
            "InsNum": resultData[iRow][2],
            "Package": resultData[iRow][3],
            "PublicationEdition": resultData[iRow][4],
            "BookingDate": resultData[iRow][5],
            "ScheduledDate": (resultData[iRow][26] < 256 ? resultData[iRow][6] : ''),
            "ScheduledPageID": resultData[iRow][7],
            "InsStatusName": resultData[iRow][8],
            "AgencyName": resultData[iRow][9],
            "ClientName": resultData[iRow][10],
            "AdTypeName": resultData[iRow][11],
            "PremiaName": resultData[iRow][12],
            "Color": resultData[iRow][13],
            "AdSize": resultData[iRow][14],
            "StyleSheet": resultData[iRow][15],
            "InvoiceNumber": resultData[iRow][16],
            "AuditStatus": resultData[iRow][17],
            "BoxNumber": resultData[iRow][18],
            "PEID": resultData[iRow][19],
            "PreVatAmount": parseFloat(resultData[iRow][20]).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"),
            "VatAmount": parseFloat(resultData[iRow][21]).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"),
            "NetAmount": parseFloat(resultData[iRow][22]).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"),
            "AgencyID": resultData[iRow][23],
            "ClientID": resultData[iRow][24],
            "PackageID": resultData[iRow][25],
            "InsStatus": resultData[iRow][26],
            "AdTypeID": resultData[iRow][27],
            "PremiaID": resultData[iRow][28],
            "ColorID": resultData[iRow][29],
            "StyleSheetID": resultData[iRow][30],
            "AdType1": resultData[iRow][31],
            "AdType2": resultData[iRow][32],
            "AdType3": resultData[iRow][33],
            "AdType4": resultData[iRow][34],
            "InvoiceNum": resultData[iRow][35],
            "AuditStatus": resultData[iRow][36],
            "AgnCat": resultData[iRow][37],
            "ClientCat": resultData[iRow][38],
            "ReleaseID": resultData[iRow][39],
            "ProductID": resultData[iRow][40],
            "BrandID": resultData[iRow][41],
            "UOM": resultData[iRow][42],
            "AdHeight": resultData[iRow][43],
            "AdColumns": resultData[iRow][44],
            "CanvassorName": resultData[iRow][45],
            "MachineName": resultData[iRow][46],
            "ProductName": resultData[iRow][47],
            "RONumber": resultData[iRow][48],
            "PaymentMode": resultData[iRow][49],
            "BillingType": resultData[iRow][50],
            "BookingCenter": resultData[iRow][51],
            "RevenueCenter": resultData[iRow][52],
            "SMEName": resultData[iRow][53],
            "BookExecName": resultData[iRow][54],
            "Classification": resultData[iRow][55],
            "BookingNum": resultData[iRow][56],
            "SchedulingInstructions": resultData[iRow][57],
            "BookingExecID": resultData[iRow][58],
            "AdTypeID": resultData[iRow][59],
            "MBodycount": resultData[iRow][60],
            "BoxAddress": resultData[iRow][61],
            "ReceiptID": resultData[iRow][62],
            "CardRate": (iRow < resultData.length - 1 ? (parseFloat(resultData[iRow][63]).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")) : ''),
            "BillingInstruction": resultData[iRow][64],
            "AgnOldCode": resultData[iRow][65],
            "TaxRegisterationNumber": resultData[iRow][66],
            "ClientOldCode": resultData[iRow][67],
            "CanvassorOldcode": resultData[iRow][68],
            "CanvassorCat": resultData[iRow][69],
            "AuditedAgency": resultData[iRow][70],
            "AuditedClient": resultData[iRow][71],
            "PayType": resultData[iRow][72],
            "CancellationRemarks": resultData[iRow][73],
            "SourceROID": (resultData[iRow][74] == 0 ? '' : resultData[iRow][74]),
            "AdType1Name": resultData[iRow][75],
            "AdType2Name": resultData[iRow][76],
            "AdType3Name": resultData[iRow][77],
            "AdType4Name": resultData[iRow][78]
        };
        Data.push(DataRow);
    }
    $("#txttotalrecord").val(resultData.length - 2);
    if (isclassified == "0") {
        gridOptions.api.setRowData(Data);
        gridOptions.api.forEachNode(function (node) {
            if (node.data.ROID === selroid) {
                if (node.data.PEID === selpeid) {
                    if (node.data.InsNum === selins) {
                        // $('[row-index = "' + node.rowIndex + '"]').click();
                        gridOptions.api.selectNode(node, true, true);
                    }
                }
            }
        });
    }
    else if (isclassified == "1") {
        gridOptions1.api.setRowData(Data);
        gridOptions1.api.forEachNode(function (node) {
            if (node.data.ROID === selroid) {
                if (node.data.PEID === selpeid) {
                    if (node.data.InsNum === selins) {
                        // $('[row-index = "' + node.rowIndex + '"]').click();
                        gridOptions1.api.selectNode(node, true, true);
                    }
                }
            }
        });
    }
    else {
        gridOptions2.api.setRowData(Data);
        gridOptions2.api.forEachNode(function (node) {
            if (node.data.ROID === selroid) {
                if (node.data.PEID === selpeid) {
                    if (node.data.InsNum === selins) {
                        // $('[row-index = "' + node.rowIndex + '"]').click();
                        gridOptions2.api.selectNode(node, true, true);
                    }
                }
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
    //$("#SummaryMainGrid .ag-row-selected .font-green").removeClass('font-green');
    var isclassified = $("#hdnIsClassified").val();
    $("#btnopen").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
    $("#btnorderhistory").css("background-color", "").css("pointer-events", "").css("cursor", "").css("color", "");
    $("#btnuserhistory").css("background-color", "").css("pointer-events", "").css("cursor", "").css("color", "");
    $("#lnkOpenBooking").css("background-color", "").css("pointer-events", "").css("cursor", "").css("color", "");
    var insstatus;
    if (isclassified == "0")
        selectedRows = gridOptions.api.getSelectedRows();
    else if (isclassified == "1")
        selectedRows = gridOptions1.api.getSelectedRows();
    else
        selectedRows = gridOptions2.api.getSelectedRows();

    selectedRows.forEach(function (selectedRow, index) {
        insstatus = selectedRow.InsStatus;
        roid = selectedRow.ROID;
        insnum = selectedRow.InsNum;
        pe = selectedRow.PublicationEdition;
        adtype = selectedRow.AdTypeName;
        bkcode = selectedRow.BookingCenter;
        bkdate = selectedRow.BookingDate;
        ronum = selectedRow.RONumber;
        schdate = selectedRow.ScheduledDate;
        peid = selectedRow.PublicationEdition;
        speid = selectedRow.PEID;
    });

    selroid = roid;
    selins = insnum;
    selpeid = speid;

    $("#hdntxtroid").val(roid);
    $("#peroid").val(roid);
    $("#peinsno").val(insnum);
    $("#oldpenameid").val(peid);
    $("#oldpedate").val(schdate);

    if (insstatus == "512") {
        $("#btnrevive").hide();
        $("#btnsuspend").show();
        $("#btnrevive").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
        $("#btncancel").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
        $("#btnsuspend").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
        $("#btntransfer").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
        $("#btnreschedule").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
    }
    else if (insstatus == "256") {
        $("#btnsuspend").hide();
        $("#btnrevive").show();
        $("#btnrevive").css("background-color", "").css("pointer-events", "").css("cursor", "").css("color", "");
        $("#btncancel").css("background-color", "").css("pointer-events", "").css("cursor", "").css("color", "");
        $("#btnsuspend").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
        $("#btntransfer").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
        $("#btnreschedule").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
    }
    else if (insstatus == undefined || insstatus == "") {
        $("#btnrevive").hide();
        $("#btnsuspend").show();
        $("#btnrevive").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
        $("#btncancel").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
        $("#btnsuspend").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
        $("#btntransfer").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
        $("#btnreschedule").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
    }
    else {
        $("#btnrevive").hide();
        $("#btnsuspend").show();
        $("#btnrevive").css("background-color", "transparent").css("pointer-events", "none").css("cursor", "not-allowed").css("color", "#fff");
        $("#btncancel").css("background-color", "").css("pointer-events", "").css("cursor", "").css("color", "");
        $("#btnsuspend").css("background-color", "").css("pointer-events", "").css("cursor", "").css("color", "");
        $("#btntransfer").css("background-color", "").css("pointer-events", "").css("cursor", "").css("color", "");
        $("#btnreschedule").css("background-color", "").css("pointer-events", "").css("cursor", "").css("color", "");
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
    { headerName: "Bill Size", field: "AdSize", width: 80, tooltipField: "AdSize" },
    { headerName: "Premia", field: "PremiaName", width: 80, tooltipField: "PremiaName" },
    { headerName: "Package", field: "Package", width: 80, tooltipField: "Package" },
    { headerName: "Sched. Instr.", field: "SchedulingInstructions", width: 120, tooltipField: "SchedulingInstructions" },
    { headerName: "Pre Vat", field: "PreVatAmount", width: 110, tooltipField: "PreVatAmount", cellStyle: { 'text-align': 'right' } },
    { headerName: "Vat", field: "VatAmount", width: 110, tooltipField: "VatAmount", cellStyle: { 'text-align': 'right' } },
    { headerName: "Net Amt", field: "NetAmount", width: 110, tooltipField: "NetAmount", cellStyle: { 'text-align': 'right' } },
    { headerName: "Ins No.", field: "InsNum", width: 80, tooltipField: "InsNum", cellStyle: { 'text-align': 'center' } },
    { headerName: "Color", field: "Color", width: 60, tooltipField: "Color" },
    { headerName: "Page No.", field: "ScheduledPageID", width: 90, tooltipField: "ScheduledPageID" },
    { headerName: "Canvassor", field: "CanvassorName", width: 90, tooltipField: "CanvassorName" },
    { headerName: "Bk Center", field: "BookingCenter", width: 90, tooltipField: "BookingCenter" },
    { headerName: "Booking Exec", field: "BookExecName", width: 120, tooltipField: "BookExecName" },
    { headerName: "AdType", field: "AdTypeName", width: 90, tooltipField: "AdTypeName" },
    //{ headerName: "Ad Classification", field: "isClassified", width: 150, tooltipField: "isClassified" },
    { headerName: "Style", field: "StyleSheet", width: 60, tooltipField: "StyleSheet" },
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
    { headerName: "Audited Agency", field: "AuditedAgency", width: 140, tooltipField: "AuditedAgency" },
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
    { headerName: "Bill Size", field: "AdSize", width: 80, tooltipField: "AdSize" },
    { headerName: "Premia", field: "PremiaName", width: 80, tooltipField: "PremiaName" },
    { headerName: "Package", field: "Package", width: 80, tooltipField: "Package" },
    { headerName: "Sched. Instr.", field: "SchedulingInstructions", width: 120, tooltipField: "SchedulingInstructions" },
    { headerName: "Pre Vat", field: "PreVatAmount", width: 110, tooltipField: "PreVatAmount", cellStyle: { 'text-align': 'right' } },
    { headerName: "Vat", field: "VatAmount", width: 110, tooltipField: "VatAmount", cellStyle: { 'text-align': 'right' } },
    { headerName: "Net Amt", field: "NetAmount", width: 110, tooltipField: "NetAmount", cellStyle: { 'text-align': 'right' } },
    { headerName: "Ins No.", field: "InsNum", width: 80, tooltipField: "InsNum", cellStyle: { 'text-align': 'center' } },
    { headerName: "Color", field: "Color", width: 60, tooltipField: "Color" },
    { headerName: "Page No.", field: "ScheduledPageID", width: 90, tooltipField: "ScheduledPageID" },
    { headerName: "Canvassor", field: "CanvassorName", width: 90, tooltipField: "CanvassorName" },
    { headerName: "Bk Center", field: "BookingCenter", width: 90, tooltipField: "BookingCenter" },
    { headerName: "Booking Exec", field: "BookExecName", width: 120, tooltipField: "BookExecName" },
    { headerName: "AdType", field: "AdTypeName", width: 90, tooltipField: "AdTypeName" },
    //{ headerName: "Ad Classification", field: "isClassified", width: 150, tooltipField: "isClassified" },
    { headerName: "Style", field: "StyleSheet", width: 60, tooltipField: "StyleSheet" },
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
    { headerName: "Audited Agency", field: "AuditedAgency", width: 140, tooltipField: "AuditedAgency" },
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

function InsertionOpenBookingData(EbookingRoot, MainDiv) {
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
        filterscreen = 2;
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
        fromreceiptid = parseInt(n) * 10000000 + parseInt(fromreceiptid);
        $("#rangeFrom5").val(fromreceiptid);
    }

    var toreceiptid = $("#rangeTo5").val();
    if (toreceiptid == "" || toreceiptid == null) {
        toreceiptid = 0;
    }
    else if (toreceiptid.toString().length >= 1 && toreceiptid.toString().length <= 7) {
        var n = serverDate.getYear();
        toreceiptid = parseInt(n) * 10000000 + parseInt(toreceiptid);
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
    var materialstatusid = $("#materialstatusid").val();
    if (materialstatusid == "" || materialstatusid == null) {
        materialstatusid = -1;
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
    xmlString += "<ronumber>" + ronumber + "</ronumber><stylesheetid>" + stylesheetid + "</stylesheetid><materialstatus>" + materialstatusid + "</materialstatus><adtypeidlist>" + adtypeidlist + "</adtypeidlist><packageidlist>" + packageidlist + "</packageidlist><peidlist>" + peidlist + "</peidlist><adtype1>" + classification1 + "</adtype1><adtype2>" + classification2 + "</adtype2><adtype3>" + classification3 + "</adtype3><adtype4>" + classification4 + "</adtype4><premiaid>" + premiaid + "</premiaid>"
    xmlString += "<adsizeid>" + adsizeid + "</adsizeid><bookingexecid>" + bookingexecid + "</bookingexecid><colorid>" + colorid + "</colorid><paymentmode>" + flag + "</paymentmode><orderstatus>" + orderstatus + "</orderstatus><billtypeid>" + billtypeid + "</billtypeid><boxtypeid>" + boxtypeid + "</boxtypeid></track>";

    var url = appRoot + "TrackInsertions/ShowEtrackingData";
    var param = {};
    param.xmlData = xmlString;
    param.id = 0;
    var result = getresult(url, param);
    if (result.length > 1) {
        table = makeExcelTable(result);
    }
    else {
        alert('No data to export!')
        return false;
    }
    exportTableToCSV.call(this, $(table), 'Export.csv');
    setTimeout(function () {
        $("#lnkExportData").attr("href", "#");
    }, 2000);
});


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
                row.append($("<td style='align:left;'/>").text(r[49] == 'Prepaid' ? ('P ' + rowIndex) : ('=' + rowIndex + '&" "')));
            }
            else {
                row.append($("<td/>").text(""));
            }
            row.append($("<td/>").text(r[0]));
            row.append($("<td/>").text(r[74] == 0 ? '' : r[74]));
            row.append($("<td/>").text(r[48]));
            row.append($("<td/>").text(r[9]));
            row.append($("<td/>").text(r[10]));
            row.append($("<td/>").text(r[26] < 256 ? r[6] : ''));
            row.append($("<td/>").text(r[14]));
            row.append($("<td/>").text(r[12]));
            row.append($("<td/>").text(r[3]));
            row.append($("<td/>").text(r[57]));
            row.append($("<td/>").text(r[22]));
            row.append($("<td/>").text('="' + r[2] + '"'));
            row.append($("<td/>").text(r[13]));
            row.append($("<td/>").text(r[7]));
            row.append($("<td/>").text(r[45]));
            row.append($("<td/>").text(r[51]));
            row.append($("<td/>").text(r[54]));
            row.append($("<td/>").text(r[11]));
            row.append($("<td/>").text(r[15]));
            row.append($("<td/>").text(r[60]));
            row.append($("<td/>").text(r[18]));
            row.append($("<td/>").text(r[61]));
            row.append($("<td/>").text(r[47]));
            row.append($("<td/>").text(r[72]));
            row.append($("<td/>").text(r[62]));
            row.append($("<td/>").text(r[16]));
            row.append($("<td/>").text(r[49]));
            row.append($("<td/>").text(r[64]));
            row.append($("<td/>").text(r[63]));
            row.append($("<td/>").text(r[65]));
            row.append($("<td/>").text(r[67]));
            row.append($("<td/>").text(r[68]));
            row.append($("<td/>").text(r[66]));
            row.append($("<td/>").text(r[37]));
            row.append($("<td/>").text(r[38]));
            row.append($("<td/>").text(r[69]));
            row.append($("<td/>").text(r[5]));
            row.append($("<td/>").text(r[70]));
            row.append($("<td/>").text(r[71]));
            if (rowIndex < data.length - 1) {
                row.append($("<td/>").text(r[1] == '1' ? 'Classified' : 'Display'));
            }
            else {
                row.append($("<td/>").text(""));
            }
            row.append($("<td/>").text(r[75]));
            row.append($("<td/>").text(r[76]));
            row.append($("<td/>").text(r[77]));
            row.append($("<td/>").text(r[78]));
            row.append($("<td/>").text(r[73]));
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
    var url = appRoot + "TrackInsertions/GetSearchAgencyData";
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
    var url = appRoot + "TrackInsertions/GetSearchClientData";
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