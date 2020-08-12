var agencyidvalue = 0;
var clientidvalue = 0;
var adtypeidvalue = 0;
function pageload(appRoot) {
    BindFiltersData(appRoot);
    AutoFillagencyclientList(appRoot);
}

function BindFiltersData(appRoot) {
    var isclassified = $("#hdnIsClassified").val();
    var allFilterElement = $('[newflag = "forXmltype"]');
    var allFilterElementLength = allFilterElement.length;
    for (var i = 0; i < allFilterElementLength; i++) {
        $("#" + allFilterElement[i].id).empty();
        $("#agencyid").empty();
        $("#clientid").empty();
        $("#adtypeid").empty();
        var parametername = $("#" + allFilterElement[i].id).attr("parameter");
        var paramValue = $("#" + allFilterElement[i].id).val();
        if (paramValue == null)
            paramValue = 0;
        var xmlString = "<track><actionname>" + parametername + "</actionname><isclassified>" + isclassified + "</isclassified><screen>1</screen></track>";
        var url = appRoot + "eTracking/etrackingFiltersData";
        var param = {};
        param.xmlData = xmlString;
        var result = getresult(url, param);
        if (result.length > 0) {
            for (var m = 0; m < result.length; m++)
                $("#" + allFilterElement[i].id).append(new Option(result[m].key, result[m].value));
        }
    }
}

function AutoFillagencyclientList(appRoot) {
    $("#clientid").autocomplete({
        source: function (request, response) {
            var isclassified = $("#hdnIsClassified").val();
            var clientcatid = $("#clientcatid").val();
            var parametername = $("#clientid").attr("parameter");
            var paramValue = $("#clientid").val();
            if (paramValue == null)
                paramValue = 0;
            var xmlString = "<track><actionname>" + parametername + "</actionname><isclassified>" + isclassified + "</isclassified><clientname>" + paramValue.replace('&', '&amp;') + "</clientname><clientcatid>" + clientcatid + "</clientcatid><agencyflag>0</agencyflag></track>";
            var url = appRoot + "eTracking/etrackingFiltersData";
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
        }
    });
    $("#clientnameid").autocomplete({
        source: function (request, response) {
            var isclassified = $("#hdnIsClassified").val();
            var clientcatid = $("#clientcatid").val();
            var parametername = $("#clientnameid").attr("parameter");
            var paramValue = $("#clientnameid").val();
            if (paramValue == null)
                paramValue = 0;
            var xmlString = "<track><actionname>" + parametername + "</actionname><isclassified>" + isclassified + "</isclassified><clientname>" + paramValue.replace('&', '&amp;') + "</clientname><clientcatid>" + clientcatid + "</clientcatid><agencyflag>1</agencyflag></track>";
            var url = appRoot + "eTracking/etrackingFiltersData";
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
        appendTo: $("#clientFilter")
    });
    $("#agencyid").autocomplete({
        source: function (request, response) {
            var isclassified = $("#hdnIsClassified").val();
            var agencycatid = $("#agencycatid").val();
            var parametername = $("#agencyid").attr("parameter");
            var paramValue = $("#agencyid").val();
            if (paramValue == null)
                paramValue = 0;
            var xmlString = "<track><actionname>" + parametername + "</actionname><isclassified>" + isclassified + "</isclassified><agencyname>" + paramValue.replace('&', '&amp;') + "</agencyname><agencycatid>" + agencycatid + "</agencycatid><agencyflag>0</agencyflag></track>";
            var url = appRoot + "eTracking/etrackingFiltersData";
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
        }
    });
    $("#agencynameid").autocomplete({
        source: function (request, response) {
            var isclassified = $("#hdnIsClassified").val();
            var agencycatid = $("#agencycatid").val();
            var parametername = $("#agencynameid").attr("parameter");
            var paramValue = $("#agencynameid").val();
            if (paramValue == null)
                paramValue = 0;
            var xmlString = "<track><actionname>" + parametername + "</actionname><isclassified>" + isclassified + "</isclassified><agencyname>" + paramValue.replace('&', '&amp;') + "</agencyname><agencycatid>" + agencycatid + "</agencycatid><agencyflag>1</agencyflag></track>";
            var url = appRoot + "eTracking/etrackingFiltersData";
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
        appendTo: $("#agencyFilter")
    });

    $("#adtypeid").autocomplete({
        source: function (request, response) {
            var isclassified = $("#hdnIsClassified").val();
            var adtypeidlist = $("#adtypeidlist").val();
            if (adtypeidlist != null) {
                if (adtypeidlist[0] == "multiselect-all")
                    adtypeidlist.splice(0, 1);
            }
            if (adtypeidlist == null || ($("#adtypeidlist option").length == $("#adtypeidlist option:selected").length))
                adtypeidlist = 0;
            var parametername = $("#adtypeid").attr("parameter");
            var paramValue = $("#adtypeid").val();
            if (paramValue == null)
                paramValue = 0;
            var xmlString = "<track><actionname>" + parametername + "</actionname><isclassified>" + isclassified + "</isclassified><adtypename>" + paramValue.replace('&', '&amp;') + "</adtypename><adtypeidlist>" + adtypeidlist + "</adtypeidlist></track>";
            var url = appRoot + "eTracking/etrackingFiltersData";
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
            $("#adtypeid").val(ui.item.key);
            adtypeidvalue = ui.item.key;
        }
    });
}

function ShowtrackingData(appRoot, MainDiv) {
    $('#SummaryMainGrid').empty();
    var dateflag = $("#dateflag").val();
    var fromdate = $("#txtFromDate").val();
    var todate = $("#txtToDate").val();
    var isclassified = $("#hdnIsClassified").val();
    var logcentreid = $("#hdnlogcentreid").val();
    if (logcentreid == undefined) {
        logcentreid = 1;
    }
    var userid = $("#hdnuserid").val();
    if (userid == undefined) {
        userid = 1;
    }
    var filterscreen = $("#hdnScreenId").val();
    if (filterscreen == undefined) {
        filterscreen = 1;
    }
    var fromroid = $("#rangeFrom4").val();
    if (fromroid == "" || fromroid == null) {
        fromroid = 0;
    }
    var toroid = $("#rangeTo4").val();
    if (toroid == "" || toroid == null) {
        toroid = 0;
    }
    var frombookingnum = $("#rangeFrom3").val();
    if (frombookingnum == "" || frombookingnum == null) {
        frombookingnum = 0;
    }
    var tobookingnum = $("#rangeTo3").val();
    if (tobookingnum == "" || tobookingnum == null) {
        tobookingnum = 0;
    }
    var fromboxnum = $("#rangeFrom2").val();
    if (fromboxnum == "" || fromboxnum == null) {
        fromboxnum = 0;
    }
    var toboxnum = $("#rangeTo2").val();
    if (toboxnum == "" || toboxnum == null) {
        toboxnum = 0;
    }
    var frominvoicenum = $("#rangeFrom1").val();
    if (frominvoicenum == "" || frominvoicenum == null) {
        frominvoicenum = 0;
    }
    var toinvoicenum = $("#rangeTo1").val();
    if (toinvoicenum == "" || toinvoicenum == null) {
        toinvoicenum = 0;
    }
    var fromreceiptid = $("#rangeFrom5").val();
    if (fromreceiptid == "" || fromreceiptid == null) {
        fromreceiptid = 0;
    }
    var toreceiptid = $("#rangeTo5").val();
    if (toreceiptid == "" || toreceiptid == null) {
        toreceiptid = 0;
    }
    var machineid = $("#machineid").val();
    var productid = $("#productid").val();
    var smeid = $("#smeid").val();
    var revenuecentreid = $("#revenuecentreid").val();
    var bookingcentreid = $("#bookingcentreid").val();
    var agencycatidlist = $("#agencycatid").val();
    var clientcatidlist = $("#clientcatid").val();
    var agencyid = agencyidvalue;
    if (agencyid == "" || agencyid == null) {
        agencyid = 0;
    }
    var clientid = clientidvalue;
    if (clientid == "" || clientid == null) {
        clientid = 0;
    }
    var canvassorid = $("#canvassorid").val();
    var ronumber = $("#ronumber").val();
    var adtypeidlist = $("#adtypeidlist").val();
    if (adtypeidlist != null) {
        if (adtypeidlist[0] == "multiselect-all")
            adtypeidlist.splice(0, 1);
    }
    if (adtypeidlist == null || ($("#adtypeidlist option").length == $("#adtypeidlist option:selected").length))
        adtypeidlist = 0;

    var packageidlist = $("#packageidlist").val();
    if (packageidlist != null) {
        if (packageidlist[0] == "multiselect-all")
            packageidlist.splice(0, 1);
    }
    if (packageidlist == null || ($("#packageidlist option").length == $("#packageidlist option:selected").length))
        packageidlist = 0;

    var classification = adtypeidvalue;
    if (classification == "" || classification == null) {
        classification = 0;
    }
    var adsizeid = $("#adsizeid").val();
    var bookingexecid = $("#bookingexecid").val();
    var premiaid = $("#premiaid").val();
    var colorid = $("#colorid").val();
    var flag = $("#flag").val();
    var orderstatus = $("#orderstatus").val();
    var billtypeid = $("#billtypeid").val();
    var stylesheetid = $("#stylesheetid").val();

    var xmlString = "<track><actionname>showddata</actionname>"
    xmlString += "<dateflag>" + dateflag + "</dateflag><fromdate>" + fromdate + "</fromdate><todate>" + todate + "</todate><isclassified>" + isclassified + "</isclassified>"
    xmlString += "<logcentreid>" + logcentreid + "</logcentreid><loguserid>" + userid + "</loguserid><screen>" + filterscreen + "</screen>"
    xmlString += "<fromroid>" + fromroid + "</fromroid><toroid>" + toroid + "</toroid><frombookingnum>" + frombookingnum + "</frombookingnum><tobookingnum>" + tobookingnum + "</tobookingnum>"
    xmlString += "<fromboxnum>" + fromboxnum + "</fromboxnum><toboxnum>" + toboxnum + "</toboxnum><frominvoicenum>" + frominvoicenum + "</frominvoicenum><toinvoicenum>" + toinvoicenum + "</toinvoicenum><fromreceiptid>" + fromreceiptid + "</fromreceiptid>"
    xmlString += "<toreceiptid>" + toreceiptid + "</toreceiptid><machineid>" + machineid + "</machineid><productid>" + productid + "</productid><smeid>" + smeid + "</smeid><revenuecentreid>" + revenuecentreid + "</revenuecentreid><bookingcentreid>" + bookingcentreid + "</bookingcentreid><agencycatidlist>" + agencycatidlist + "</agencycatidlist>"
    xmlString += "<clientcatidlist>" + clientcatidlist + "</clientcatidlist><agencyid>" + agencyid + "</agencyid><clientid>" + clientid + "</clientid><canvassorid>" + canvassorid + "</canvassorid>"
    xmlString += "<ronumber>" + ronumber + "</ronumber><stylesheetid>" + stylesheetid + "</stylesheetid><adtypeidlist>" + adtypeidlist + "</adtypeidlist><packageidlist>" + packageidlist + "</packageidlist><adtypeid>" + classification + "</adtypeid><premiaid>" + premiaid + "</premiaid>"
    xmlString += "<adsizeid>" + adsizeid + "</adsizeid><bookingexecid>" + bookingexecid + "</bookingexecid><colorid>" + colorid + "</colorid><flag>" + flag + "</flag><orderstatus>" + orderstatus + "</orderstatus><billtypeid>" + billtypeid + "</billtypeid></track>";
    var url = appRoot + "eTracking/ShowEtrackingData";
    var param = {};
    param.xmlData = xmlString;
    param.id = 0;
    var result = getresult(url, param);
    if (result.length > 1) {
        ShowMainGridData(result);
    }
    else {
        $('#SummaryMainGrid').css('text-align', 'center').html("No Record Found!!");
    }
}

function CanceltrackingData(appRoot, MainDiv) {
    $('#SummaryMainGrid').empty();
    var dateflag = $("#dateflag").val();
    var fromdate = $("#txtFromDate").val();
    var todate = $("#txtToDate").val();
    var isclassified = $("#hdnIsClassified").val();
    var logcentreid = $("#hdnlogcentreid").val();
    if (logcentreid == undefined) {
        logcentreid = 1;
    }
    var userid = $("#hdnuserid").val();
    if (userid == undefined) {
        userid = 1;
    }
    var filterscreen = $("#hdnScreenId").val();
    if (filterscreen == undefined) {
        filterscreen = 1;
    }
    var fromroid = $("#rangeFrom4").val();
    if (fromroid == "" || fromroid == null) {
        fromroid = 0;
    }
    var toroid = $("#rangeTo4").val();
    if (toroid == "" || toroid == null) {
        toroid = 0;
    }
    var frombookingnum = $("#rangeFrom3").val();
    if (frombookingnum == "" || frombookingnum == null) {
        frombookingnum = 0;
    }
    var tobookingnum = $("#rangeTo3").val();
    if (tobookingnum == "" || tobookingnum == null) {
        tobookingnum = 0;
    }
    var fromboxnum = $("#rangeFrom2").val();
    if (fromboxnum == "" || fromboxnum == null) {
        fromboxnum = 0;
    }
    var toboxnum = $("#rangeTo2").val();
    if (toboxnum == "" || toboxnum == null) {
        toboxnum = 0;
    }
    var frominvoicenum = $("#rangeFrom1").val();
    if (frominvoicenum == "" || frominvoicenum == null) {
        frominvoicenum = 0;
    }
    var toinvoicenum = $("#rangeTo1").val();
    if (toinvoicenum == "" || toinvoicenum == null) {
        toinvoicenum = 0;
    }
    var fromreceiptid = $("#rangeFrom5").val();
    if (fromreceiptid == "" || fromreceiptid == null) {
        fromreceiptid = 0;
    }
    var toreceiptid = $("#rangeTo5").val();
    if (toreceiptid == "" || toreceiptid == null) {
        toreceiptid = 0;
    }
    var machineid = $("#machineid").val();
    var productid = $("#productid").val();
    var smeid = $("#smeid").val();
    var revenuecentreid = $("#revenuecentreid").val();
    var bookingcentreid = $("#bookingcentreid").val();
    var agencycatidlist = $("#agencycatid").val();
    var clientcatidlist = $("#clientcatid").val();
    var agencyid = agencyidvalue;
    if (agencyid == "" || agencyid == null) {
        agencyid = 0;
    }
    var clientid = clientidvalue;
    if (clientid == "" || clientid == null) {
        clientid = 0;
    }
    var canvassorid = $("#canvassorid").val();
    var ronumber = $("#ronumber").val();
    var adtypeidlist = $("#adtypeidlist").val();
    if (adtypeidlist != null) {
        if (adtypeidlist[0] == "multiselect-all")
            adtypeidlist.splice(0, 1);
    }
    if (adtypeidlist == null || ($("#adtypeidlist option").length == $("#adtypeidlist option:selected").length))
        adtypeidlist = 0;

    var packageidlist = $("#packageidlist").val();
    if (packageidlist != null) {
        if (packageidlist[0] == "multiselect-all")
            packageidlist.splice(0, 1);
    }
    if (packageidlist == null || ($("#packageidlist option").length == $("#packageidlist option:selected").length))
        packageidlist = 0;

    var classification = adtypeidvalue;
    if (classification == "" || classification == null) {
        classification = 0;
    }
    var adsizeid = $("#adsizeid").val();
    var bookingexecid = $("#bookingexecid").val();
    var premiaid = $("#premiaid").val();
    var colorid = $("#colorid").val();
    var flag = $("#flag").val();
    var orderstatus = $("#orderstatus").val();
    var billtypeid = $("#billtypeid").val();
    var stylesheetid = $("#stylesheetid").val();

    var xmlString = "<track><actionname>cancel</actionname>"
    xmlString += "<dateflag>" + dateflag + "</dateflag><fromdate>" + fromdate + "</fromdate><todate>" + todate + "</todate><isclassified>" + isclassified + "</isclassified>"
    xmlString += "<logcentreid>" + logcentreid + "</logcentreid><loguserid>" + userid + "</loguserid><screen>" + filterscreen + "</screen>"
    xmlString += "<fromroid>" + fromroid + "</fromroid><toroid>" + toroid + "</toroid><frombookingnum>" + frombookingnum + "</frombookingnum><tobookingnum>" + tobookingnum + "</tobookingnum>"
    xmlString += "<fromboxnum>" + fromboxnum + "</fromboxnum><toboxnum>" + toboxnum + "</toboxnum><frominvoicenum>" + frominvoicenum + "</frominvoicenum><toinvoicenum>" + toinvoicenum + "</toinvoicenum><fromreceiptid>" + fromreceiptid + "</fromreceiptid>"
    xmlString += "<toreceiptid>" + toreceiptid + "</toreceiptid><machineid>" + machineid + "</machineid><productid>" + productid + "</productid><smeid>" + smeid + "</smeid><revenuecentreid>" + revenuecentreid + "</revenuecentreid><bookingcentreid>" + bookingcentreid + "</bookingcentreid><agencycatidlist>" + agencycatidlist + "</agencycatidlist>"
    xmlString += "<clientcatidlist>" + clientcatidlist + "</clientcatidlist><agencyid>" + agencyid + "</agencyid><clientid>" + clientid + "</clientid><canvassorid>" + canvassorid + "</canvassorid>"
    xmlString += "<ronumber>" + ronumber + "</ronumber><stylesheetid>" + stylesheetid + "</stylesheetid><adtypeidlist>" + adtypeidlist + "</adtypeidlist><packageidlist>" + packageidlist + "</packageidlist><adtypeid>" + classification + "</adtypeid><premiaid>" + premiaid + "</premiaid>"
    xmlString += "<adsizeid>" + adsizeid + "</adsizeid><bookingexecid>" + bookingexecid + "</bookingexecid><colorid>" + colorid + "</colorid><flag>" + flag + "</flag><orderstatus>" + orderstatus + "</orderstatus><billtypeid>" + billtypeid + "</billtypeid></track>";
    var url = appRoot + "eTracking/ShowEtrackingData";
    var param = {};
    param.xmlData = xmlString;
    param.id = 0;
    var result = getresult(url, param);
    if (result.length > 1) {
        ShowMainGridData(result);
    }
    else {
        $('#SummaryMainGrid').css('text-align', 'center').html("No Record Found!!");
    }
}

function SuspendtrackingData(appRoot, MainDiv) {
    $('#SummaryMainGrid').empty();
    var dateflag = $("#dateflag").val();
    var fromdate = $("#txtFromDate").val();
    var todate = $("#txtToDate").val();
    var isclassified = $("#hdnIsClassified").val();
    var logcentreid = $("#hdnlogcentreid").val();
    if (logcentreid == undefined) {
        logcentreid = 1;
    }
    var userid = $("#hdnuserid").val();
    if (userid == undefined) {
        userid = 1;
    }
    var filterscreen = $("#hdnScreenId").val();
    if (filterscreen == undefined) {
        filterscreen = 1;
    }
    var fromroid = $("#rangeFrom4").val();
    if (fromroid == "" || fromroid == null) {
        fromroid = 0;
    }
    var toroid = $("#rangeTo4").val();
    if (toroid == "" || toroid == null) {
        toroid = 0;
    }
    var frombookingnum = $("#rangeFrom3").val();
    if (frombookingnum == "" || frombookingnum == null) {
        frombookingnum = 0;
    }
    var tobookingnum = $("#rangeTo3").val();
    if (tobookingnum == "" || tobookingnum == null) {
        tobookingnum = 0;
    }
    var fromboxnum = $("#rangeFrom2").val();
    if (fromboxnum == "" || fromboxnum == null) {
        fromboxnum = 0;
    }
    var toboxnum = $("#rangeTo2").val();
    if (toboxnum == "" || toboxnum == null) {
        toboxnum = 0;
    }
    var frominvoicenum = $("#rangeFrom1").val();
    if (frominvoicenum == "" || frominvoicenum == null) {
        frominvoicenum = 0;
    }
    var toinvoicenum = $("#rangeTo1").val();
    if (toinvoicenum == "" || toinvoicenum == null) {
        toinvoicenum = 0;
    }
    var fromreceiptid = $("#rangeFrom5").val();
    if (fromreceiptid == "" || fromreceiptid == null) {
        fromreceiptid = 0;
    }
    var toreceiptid = $("#rangeTo5").val();
    if (toreceiptid == "" || toreceiptid == null) {
        toreceiptid = 0;
    }
    var machineid = $("#machineid").val();
    var productid = $("#productid").val();
    var smeid = $("#smeid").val();
    var revenuecentreid = $("#revenuecentreid").val();
    var bookingcentreid = $("#bookingcentreid").val();
    var agencycatidlist = $("#agencycatid").val();
    var clientcatidlist = $("#clientcatid").val();
    var agencyid = agencyidvalue;
    if (agencyid == "" || agencyid == null) {
        agencyid = 0;
    }
    var clientid = clientidvalue;
    if (clientid == "" || clientid == null) {
        clientid = 0;
    }
    var canvassorid = $("#canvassorid").val();
    var ronumber = $("#ronumber").val();
    var adtypeidlist = $("#adtypeidlist").val();
    if (adtypeidlist != null) {
        if (adtypeidlist[0] == "multiselect-all")
            adtypeidlist.splice(0, 1);
    }
    if (adtypeidlist == null || ($("#adtypeidlist option").length == $("#adtypeidlist option:selected").length))
        adtypeidlist = 0;

    var packageidlist = $("#packageidlist").val();
    if (packageidlist != null) {
        if (packageidlist[0] == "multiselect-all")
            packageidlist.splice(0, 1);
    }
    if (packageidlist == null || ($("#packageidlist option").length == $("#packageidlist option:selected").length))
        packageidlist = 0;
    var classification = adtypeidvalue;
    if (classification == "" || classification == null) {
        classification = 0;
    }
    var adsizeid = $("#adsizeid").val();
    var bookingexecid = $("#bookingexecid").val();
    var premiaid = $("#premiaid").val();
    var colorid = $("#colorid").val();
    var flag = $("#flag").val();
    var orderstatus = $("#orderstatus").val();
    var billtypeid = $("#billtypeid").val();
    var stylesheetid = $("#stylesheetid").val();

    var xmlString = "<track><actionname>suspend</actionname>"
    xmlString += "<dateflag>" + dateflag + "</dateflag><fromdate>" + fromdate + "</fromdate><todate>" + todate + "</todate><isclassified>" + isclassified + "</isclassified>"
    xmlString += "<logcentreid>" + logcentreid + "</logcentreid><loguserid>" + userid + "</loguserid><screen>" + filterscreen + "</screen>"
    xmlString += "<fromroid>" + fromroid + "</fromroid><toroid>" + toroid + "</toroid><frombookingnum>" + frombookingnum + "</frombookingnum><tobookingnum>" + tobookingnum + "</tobookingnum>"
    xmlString += "<fromboxnum>" + fromboxnum + "</fromboxnum><toboxnum>" + toboxnum + "</toboxnum><frominvoicenum>" + frominvoicenum + "</frominvoicenum><toinvoicenum>" + toinvoicenum + "</toinvoicenum><fromreceiptid>" + fromreceiptid + "</fromreceiptid>"
    xmlString += "<toreceiptid>" + toreceiptid + "</toreceiptid><machineid>" + machineid + "</machineid><productid>" + productid + "</productid><smeid>" + smeid + "</smeid><revenuecentreid>" + revenuecentreid + "</revenuecentreid><bookingcentreid>" + bookingcentreid + "</bookingcentreid><agencycatidlist>" + agencycatidlist + "</agencycatidlist>"
    xmlString += "<clientcatidlist>" + clientcatidlist + "</clientcatidlist><agencyid>" + agencyid + "</agencyid><clientid>" + clientid + "</clientid><canvassorid>" + canvassorid + "</canvassorid>"
    xmlString += "<ronumber>" + ronumber + "</ronumber><stylesheetid>" + stylesheetid + "</stylesheetid><adtypeidlist>" + adtypeidlist + "</adtypeidlist><packageidlist>" + packageidlist + "</packageidlist><adtypeid>" + classification + "</adtypeid><premiaid>" + premiaid + "</premiaid>"
    xmlString += "<adsizeid>" + adsizeid + "</adsizeid><bookingexecid>" + bookingexecid + "</bookingexecid><colorid>" + colorid + "</colorid><flag>" + flag + "</flag><orderstatus>" + orderstatus + "</orderstatus><billtypeid>" + billtypeid + "</billtypeid></track>";
    var url = appRoot + "eTracking/ShowEtrackingData";
    var param = {};
    param.xmlData = xmlString;
    param.id = 0;
    var result = getresult(url, param);
    if (result.length > 1) {
        ShowMainGridData(result);
    }
    else {
        $('#SummaryMainGrid').css('text-align', 'center').html("No Record Found!!");
    }
}

function RevivetrackingData(appRoot, MainDiv) {
    $('#SummaryMainGrid').empty();
    var fromdate = $("#txtFromDate").val();
    var todate = $("#txtToDate").val();
    var revcenid = $("#ddlCentre").val();

    var agencyid = $("#hdnAgencyid").val();
    if ($('#ddlAgencyName').val() == null || $('#ddlAgencyName').val() == "") {
        agencyid = 0;
    }

    var clientid = $("#hdnClientid").val();
    if ($('#ddlClientName').val() == null || $('#ddlClientName').val() == "") {
        clientid = 0;
    }
    var xmlString = "<track><actionname>revive</actionname>"
    xmlString += "<loguserid>39</loguserid><logcentreid>0</logcentreid><isclassified>1</isclassified><frompubdate>" + fromdate + "</frompubdate><topubdate>" + todate + "</topubdate>"
    xmlString += "<agencyid>" + agencyid + "</agencyid><clientid>" + clientid + "</clientid>"
    xmlString += "<revenuecentreid>" + revcenid + "</revenuecentreid><screen>2</screen></track>";
    var url = appRoot + "eTracking/ShowEtrackingData";
    var param = {};
    param.xmlData = xmlString;
    param.id = 0;
    var result = getresult(url, param);
    if (result.length > 0) {
        ShowMainDetailData(MainDiv, result);
    }
}

function TransferadtrackingData(appRoot, MainDiv) {
    $('#SummaryMainGrid').empty();
    var fromdate = $("#txtFromDate").val();
    var todate = $("#txtToDate").val();
    var revcenid = $("#ddlCentre").val();

    var agencyid = $("#hdnAgencyid").val();
    if ($('#ddlAgencyName').val() == null || $('#ddlAgencyName').val() == "") {
        agencyid = 0;
    }

    var clientid = $("#hdnClientid").val();
    if ($('#ddlClientName').val() == null || $('#ddlClientName').val() == "") {
        clientid = 0;
    }
    var xmlString = "<track><actionname>transferad</actionname>"
    xmlString += "<loguserid>39</loguserid><logcentreid>0</logcentreid><isclassified>1</isclassified><frompubdate>" + fromdate + "</frompubdate><topubdate>" + todate + "</topubdate>"
    xmlString += "<agencyid>" + agencyid + "</agencyid><clientid>" + clientid + "</clientid>"
    xmlString += "<revenuecentreid>" + revcenid + "</revenuecentreid><screen>2</screen></track>";
    var url = appRoot + "eTracking/ShowEtrackingData";
    var param = {};
    param.xmlData = xmlString;
    param.id = 0;
    var result = getresult(url, param);
    if (result.length > 0) {
        ShowMainDetailData(MainDiv, result);
    }
}

function RescheduleadtrackingData(appRoot, MainDiv) {
    $('#SummaryMainGrid').empty();
    var fromdate = $("#txtFromDate").val();
    var todate = $("#txtToDate").val();
    var revcenid = $("#ddlCentre").val();

    var agencyid = $("#hdnAgencyid").val();
    if ($('#ddlAgencyName').val() == null || $('#ddlAgencyName').val() == "") {
        agencyid = 0;
    }

    var clientid = $("#hdnClientid").val();
    if ($('#ddlClientName').val() == null || $('#ddlClientName').val() == "") {
        clientid = 0;
    }
    var xmlString = "<track><actionname>reschedulead</actionname>"
    xmlString += "<loguserid>39</loguserid><logcentreid>0</logcentreid><isclassified>1</isclassified><frompubdate>" + fromdate + "</frompubdate><topubdate>" + todate + "</topubdate>"
    xmlString += "<agencyid>" + agencyid + "</agencyid><clientid>" + clientid + "</clientid>"
    xmlString += "<revenuecentreid>" + revcenid + "</revenuecentreid><screen>2</screen></track>";
    var url = appRoot + "eTracking/ShowEtrackingData";
    var param = {};
    param.xmlData = xmlString;
    param.id = 0;
    var result = getresult(url, param);
    if (result.length > 0) {
        ShowMainDetailData(MainDiv, result);
    }
}

function OrderhistorytrackingData(appRoot, MainDiv) {
    $('#SummaryMainGrid').empty();
    var fromdate = $("#txtFromDate").val();
    var todate = $("#txtToDate").val();
    var revcenid = $("#ddlCentre").val();

    var agencyid = $("#hdnAgencyid").val();
    if ($('#ddlAgencyName').val() == null || $('#ddlAgencyName').val() == "") {
        agencyid = 0;
    }

    var clientid = $("#hdnClientid").val();
    if ($('#ddlClientName').val() == null || $('#ddlClientName').val() == "") {
        clientid = 0;
    }
    var xmlString = "<track><actionname>orderhistory</actionname>"
    xmlString += "<loguserid>39</loguserid><logcentreid>0</logcentreid><isclassified>1</isclassified><frompubdate>" + fromdate + "</frompubdate><topubdate>" + todate + "</topubdate>"
    xmlString += "<agencyid>" + agencyid + "</agencyid><clientid>" + clientid + "</clientid>"
    xmlString += "<revenuecentreid>" + revcenid + "</revenuecentreid><screen>2</screen></track>";
    var url = appRoot + "eTracking/ShowEtrackingData";
    var param = {};
    param.xmlData = xmlString;
    param.id = 0;
    var result = getresult(url, param);
    if (result.length > 0) {
        ShowMainDetailData(MainDiv, result);
    }
}

function UserhistorytrackingData(appRoot, MainDiv) {
    $('#SummaryMainGrid').empty();
    var fromdate = $("#txtFromDate").val();
    var todate = $("#txtToDate").val();
    var revcenid = $("#ddlCentre").val();

    var agencyid = $("#hdnAgencyid").val();
    if ($('#ddlAgencyName').val() == null || $('#ddlAgencyName').val() == "") {
        agencyid = 0;
    }

    var clientid = $("#hdnClientid").val();
    if ($('#ddlClientName').val() == null || $('#ddlClientName').val() == "") {
        clientid = 0;
    }
    var xmlString = "<track><actionname>userhistory</actionname>"
    xmlString += "<loguserid>39</loguserid><logcentreid>0</logcentreid><isclassified>1</isclassified><frompubdate>" + fromdate + "</frompubdate><topubdate>" + todate + "</topubdate>"
    xmlString += "<agencyid>" + agencyid + "</agencyid><clientid>" + clientid + "</clientid>"
    xmlString += "<revenuecentreid>" + revcenid + "</revenuecentreid><screen>2</screen></track>";
    var url = appRoot + "eTracking/ShowEtrackingData";
    var param = {};
    param.xmlData = xmlString;
    param.id = 0;
    var result = getresult(url, param);
    if (result.length > 0) {
        ShowMainDetailData(MainDiv, result);
    }
}

var columnDefs = [
    { headerName: '', width: 30, suppressSorting: true, suppressMenu: true, },

                { headerName: "S.No", field: "SerialNumber", width: 60 },
                { headerName: "ROID", field: "ROID", width: 120 },
                { headerName: "BookingDate", field: "BookingDate", width: 120 },
                { headerName: "isClassified", field: "isClassified", width: 120 },
                { headerName: "BoxNumber", field: "BoxNumber", width: 115 },
                { headerName: "BookingNum", field: "BookingNum", width: 110 },
                { headerName: "RONumber", field: "RONumber", width: 120 },
                { headerName: "OrderStatus", field: "OrderStatus", width: 150 },
                { headerName: "Agency Name", field: "AgencyName", width: 150 },
                { headerName: "Canvassor Name", field: "CanvassorName", width: 150 },
                { headerName: "Client Name", field: "ClientName", width: 120 },
                { headerName: "AdType Name", field: "AdTypeName", width: 120 },
                { headerName: "Machine Name", field: "MachineName", width: 120 },
                { headerName: "RevenueCenter", field: "RevenueCenter", width: 120 },
                { headerName: "BookingCenter", field: "BookingCenter", width: 120 },
                { headerName: "SMEName", field: "SMEName", width: 150 },
                { headerName: "PaymentMode", field: "PaymentMode", width: 90 },
                 { headerName: "BillingType", field: "BillingType", width: 150 },
                { headerName: "Net", field: "Net", width: 90 },
];
var gridOptions = {
    columnDefs: columnDefs,
    rowData: null,
    enableColResize: true,
    enableSorting: true,
    enableFilter: true,
};

function ShowMainGridData(resultData) {
    $('#SummaryMainGrid').html('');
    var gridDiv = document.querySelector('#SummaryMainGrid');
    new agGrid.Grid(gridDiv, gridOptions);
    var Data = [];
    for (iRow = 1; iRow < resultData.length; iRow++) {

        var DataRow = {
            "SerialNumber": iRow,
            "ROID": resultData[iRow][0],
            "BookingDate": resultData[iRow][1],
            "isClassified": resultData[iRow][2],
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
            "Net": resultData[iRow][17]

        };
        Data.push(DataRow);
    }
    gridOptions.api.setRowData(Data);
}

function RefreshData() {
    $('#filterBarTwo').find('input:text').val('');
    $('#filterBarTwo').find('span').css('visibility', 'hidden');
}

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
