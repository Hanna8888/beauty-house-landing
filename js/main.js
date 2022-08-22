"use strict";
$(document).ready(function () {
    $(".btn-menu").click(function () {
        $(".hidden-menu").show();
        $(".menu-mob").show();
    });
});

$(".menu-mob").click(function () {
    $("ul.hidden-menu").hide();
    $(".menu-mob").hide();
});