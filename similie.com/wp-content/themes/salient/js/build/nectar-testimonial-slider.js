! function(t) {
    "use strict";

    function i(t, i, e, s) {
        this.el = t, this.type = i, this.resizeVideoToCover = e, this.fullWidthContentColumns = s, this.flickityEl = null, this.createTestimonialControls()
    }
    i.prototype.createTestimonialControls = function() {
        var i, e, s, l = t("body.vc_editor").length > 0 ? "> div" : "blockquote";
        if ("multiple_visible" != this.type && "multiple_visible_minimal" != this.type)
            if (this.el.animate({
                    opacity: "1"
                }, 800), this.el.find("blockquote").length > 1) {
                this.el.find(".controls, .testimonial-next-prev").remove(), this.el.append('<div class="controls"><ul></ul></div>');
                var n = this.el.find("blockquote").length;
                i = this.el;
                for (var a = 0; a < n; a++) this.el.is('[data-style="minimal"]') ? i.find(".controls ul").append("<li>" + (a + 1) + "</li>") : i.find(".controls ul").append('<li><span class="pagination-switch"></span></li>');
                if (this.el.is('[data-style="minimal"]')) {
                    if (this.el.append('<div class="testimonial-next-prev"><a href="#" class="prev fa fa-angle-left"></a><a href="#" class="next fa fa-angle-right"></a></div>'), this.el.find(".testimonial-next-prev a").on("click", this.minimalNextPrevSelect), 0 == this.el.find(".active").length && (this.el.find(".slides " + l + ":first-child").addClass("active").css({
                            opacity: "1",
                            transform: "translateX(0px)"
                        }).css("z-index", "20"), this.el.hasClass("disable-height-animation") || this.el.find(".slides").css({
                            height: this.el.find(".slides " + l + ":first-child").height() + 40 + "px"
                        })), this.el.attr("data-autorotate").length > 0) {
                        i = this.el, e = parseInt(this.el.attr("data-autorotate")) < 100 ? 4e3 : parseInt(this.el.attr("data-autorotate")), s = this;
                        var o = setInterval(function() {
                            s.testimonialRotate(i)
                        }, e)
                    }
                    this.el.find(".testimonial-next-prev a").on("click", function(t) {
                        void 0 !== t.clientX && clearInterval(o)
                    }), this.el.find(".controls ul").wrap('<div class="control-wrap" />'), this.el.find(".controls ul").css("width", 20 * this.el.find(".controls ul li").length + 1 + "px"), this.el.find(".controls").append('<span class="out-of">/</span><span class="total">' + this.el.find("blockquote").length + "</span>"), this.el.swipe({
                        swipeLeft: function(t) {
                            return i.find(".testimonial-next-prev .next").trigger("click"), t.stopImmediatePropagation(), clearInterval(o), !1
                        },
                        swipeRight: function(t) {
                            return i.find(".testimonial-next-prev .prev").trigger("click"), t.stopImmediatePropagation(), clearInterval(o), !1
                        }
                    })
                }
                if (!this.el.is('[data-style="minimal"]')) {
                    if (this.el.find(".controls ul li").on("click", this.defaultPaginationSelect), this.el.find(".controls ul li").first().trigger("click"), this.el.attr("data-autorotate").length > 0) {
                        e = parseInt(this.el.attr("data-autorotate")) < 100 ? 4e3 : parseInt(this.el.attr("data-autorotate")), i = this.el, s = this;
                        o = setInterval(function() {
                            s.testimonialRotate(i)
                        }, e)
                    }
                    this.el.find(".controls li").on("click", function(t) {
                        void 0 !== t.clientX && clearInterval(o)
                    }), this.el.swipe({
                        swipeLeft: function(t) {
                            return i.find(".controls ul li span.active").parent().next("li").find("span").trigger("click"), t.stopImmediatePropagation(), clearInterval(o), !1
                        },
                        swipeRight: function(t) {
                            return i.find(".controls ul li span.active").parent().prev("li").find("span").trigger("click"), t.stopImmediatePropagation(), clearInterval(o), !1
                        }
                    })
                }
            } else if (0 == this.el.find(".controls").length) {
            var r = this.el.find(".slides blockquote").height();
            this.el.find(".slides blockquote").css({
                opacity: "0",
                transform: "translateX(-25px)",
                "z-index": "1"
            }), this.el.find(".slides blockquote").css({
                opacity: "1",
                transform: "translateX(0px)"
            }).css("z-index", "20"), this.el.find(".slides").stop(!0, !0).animate({
                height: r + 20 + "px"
            }, 450, "easeOutCubic")
        }
        if ("multiple_visible" == this.type || "multiple_visible_minimal" == this.type) {
            var d = t("#nectar_fullscreen_rows").length > 0;
            !window.nectarDOMInfo.usingFrontEndEditor && "IntersectionObserver" in window && !1 === d ? this.lazyFlickityInit() : this.flickityInit()
        }
        var c = this;
        t("body").on("click", '.testimonial_slider:not([data-style*="multiple_visible"]):not([data-style="minimal"]) .controls li, .testimonial_slider[data-style="minimal"] .testimonial-next-prev a', function() {
            return c.resizeVideoToCover(), !1
        })
    }, i.prototype.flickityInit = function() {
        var i = this,
            e = this.el,
            s = e.attr("data-autorotate").length > 1 && parseInt(e.attr("data-autorotate")) > 100 && parseInt(e.attr("data-autorotate"));
        0 == e.find("img").length && t("body"), "multiple_visible_minimal" != this.el.attr("data-style") ? this.el.find("blockquote").each(function() {
            t(this).find(".image-icon").insertBefore(t(this).find(".testimonial-name"))
        }) : this.el.find("blockquote").length > 4 && this.el.addClass("has-alf");
        var l = "multiple_visible_minimal" == this.el.attr("data-style"),
            n = !(t("body.vc_editor").length > 0),
            a = t("body.vc_editor").length > 0,
            o = !0,
            r = !1;
        this.el.is("[data-controls]") && "next_prev_arrows" == this.el.attr("data-controls") && (r = !0, o = !1), this.flickityEl = e.find(".slides").flickity({
            contain: !0,
            draggable: n,
            groupCells: l,
            lazyLoad: !1,
            imagesLoaded: !0,
            percentPosition: !0,
            prevNextButtons: r,
            arrowShape: {
                x0: 10,
                x1: 60,
                y1: 50,
                x2: 70,
                y2: 40,
                x3: 30
            },
            pageDots: o,
            resize: !0,
            setGallerySize: !0,
            wrapAround: !0,
            autoPlay: s,
            pauseAutoPlayOnHover: a,
            accessibility: !1
        }), this.flickityEl.find(".vc_element.is-selected > blockquote").length > 0 && (this.flickityEl.find(".vc_element.is-selected > blockquote").addClass("is-selected"), this.flickityEl.on("select.flickity", function() {
            i.flickityEl.find(".vc_element > blockquote").removeClass("is-selected"), i.flickityEl.find(".vc_element.is-selected > blockquote").addClass("is-selected")
        }));
        var d = this.el.is("[data-shadow]") ? this.el.attr("data-shadow") : "";
        "multiple_visible" == i.type && d.length > 0 && i.flickityEl.find("blockquote p").each(function() {
            t(this)[0].style = d
        }), e.css("opacity", "1"), "multiple_visible_minimal" == this.type && (this.testimonialSliderHeightMinimalMult(), setTimeout(function() {
            i.flickityEl.flickity("resize")
        }, 100))
    }, i.prototype.isSafari = function() {
        return -1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome")
    }, i.prototype.lazyFlickityInit = function() {
        var t = this;
        this.observer = new IntersectionObserver(function(i) {
            i.forEach(function(i) {
                i.isIntersecting && (t.flickityInit(), t.observer.unobserve(i.target))
            })
        }, {
            root: this.isSafari() ? null : document,
            rootMargin: "400px 0px 400px 0px",
            threshold: 0
        }), this.observer.observe(this.el[0])
    }, i.prototype.defaultPaginationSelect = function(i) {
        var e = t(i.currentTarget);
        if (e.find("span").hasClass("active")) return !1;
        var s = t("body.vc_editor").length > 0 ? "> div" : "blockquote",
            l = e.index(),
            n = e.parents(".testimonial_slider").find(".slides blockquote").eq(l).height();
        e.parents(".testimonial_slider").find("li span").removeClass("active"), e.find("span").addClass("active"), e.parents(".testimonial_slider").find(".slides " + s).addClass("no-trans"), e.parents(".testimonial_slider").find(".slides " + s).css({
            opacity: "0",
            transform: "translateX(-25px)",
            "z-index": "1"
        }), e.parents(".testimonial_slider").find(".slides " + s).eq(l).removeClass("no-trans").css({
            opacity: "1",
            transform: "translateX(0px)"
        }).css("z-index", "20"), e.parents(".testimonial_slider:not(.disable-height-animation)").find(".slides").stop(!0, !0).animate({
            height: n + 40 + "px"
        }, 450, "easeOutCubic")
    }, i.prototype.minimalNextPrevSelect = function(i) {
        var e, s = t(i.currentTarget),
            l = t("body.vc_editor").length > 0 ? "> div" : "blockquote",
            n = s.parents(".testimonial_slider").find(".slides " + l + ".active").index(),
            a = n;
        return s.parents(".testimonial_slider").find(".slides " + l).addClass("no-trans"), s.parents(".testimonial_slider").find(".slides " + l).css({
            opacity: "0",
            transform: "translateX(-25px)",
            "z-index": "1"
        }), s.parents(".testimonial_slider").find(".slides " + l).eq(n).removeClass("active"), s.hasClass("next") ? (a = n + 1 >= s.parents(".testimonial_slider").find(".slides " + l).length ? 0 : n + 1, e = s.parents(".testimonial_slider").find(".slides " + l).eq(a).height(), s.parents(".testimonial_slider").find(".slides " + l).eq(a).addClass("active").removeClass("no-trans").css({
            opacity: "1",
            transform: "translateX(0px)"
        }).css("z-index", "20"), s.parents(".testimonial_slider").find(".control-wrap ul").css({
            transform: "translateX(-" + 20 * a + "px)"
        })) : (a = n - 1 == -1 ? s.parents(".testimonial_slider").find(".slides " + l).length - 1 : n - 1, e = s.parents(".testimonial_slider").find(".slides " + l).eq(n - 1).height(), s.parents(".testimonial_slider").find(".slides " + l).eq(n - 1).addClass("active").removeClass("no-trans").css({
            opacity: "1",
            transform: "translateX(0px)"
        }).css("z-index", "20"), s.parents(".testimonial_slider").find(".control-wrap ul").css({
            transform: "translateX(-" + 20 * a + "px)"
        })), s.parents(".testimonial_slider:not(.disable-height-animation)").find(".slides").stop(!0, !0).animate({
            height: e + 40 + "px"
        }, 450, "easeOutCubic"), !1
    }, i.prototype.testimonialRotate = function() {
        var t = this.el.find("li").length,
            i = this.el.find(".pagination-switch.active").parent().index();
        this.el.parents(".toggle").length > 0 && this.el.parents(".toggle").hasClass("open"), this.el.is('[data-style="minimal"]') ? this.el.find(".testimonial-next-prev .next").trigger("click") : i + 1 == t ? this.el.find("ul li:first-child").trigger("click") : this.el.find(".pagination-switch.active").parent().next("li").trigger("click")
    }, i.prototype.testimonialHeightResize = function() {
        if (!this.el.is(".disable-height-animation") && !this.el.is('[data-style*="multiple_visible"]')) {
            var i, e = t("body.vc_editor").length > 0 ? ".slides > div" : ".slides blockquote";
            i = this.el.is('[data-style="minimal"]') ? this.el.find(e + ".active").index() : this.el.find(".controls ul li span.active").parent().index();
            var s = this.el.find(e).eq(i).height();
            this.el.find(".slides").stop(!0, !0).css({
                height: s + 40 + "px"
            })
        }
    }, i.prototype.testimonialSliderHeight = function() {
        if (this.el.is(".disable-height-animation") && !this.el.is('[data-style*="multiple_visible"]')) {
            var i = 0;
            this.el.find("blockquote").each(function() {
                i = t(this).height() > i ? t(this).height() : i
            }), 0 == i && (i = 100), this.el.find(".slides").css("height", i + 40 + "px"), this.el.animate({
                opacity: "1"
            }), this.fullWidthContentColumns()
        }
    }, i.prototype.testimonialSliderHeightMinimalMult = function() {
        if ("multiple_visible_minimal" == this.type) {
            var i = 0;
            this.el.find("blockquote > .inner").css("height", "auto"), this.el.find("blockquote > .inner").each(function() {
                i = t(this).outerHeight() > i ? t(this).outerHeight() : i
            }), 0 == i && (i = 200), this.el.find("blockquote > .inner").css("height", i + "px")
        }
    }, window.NectarTestimonialSlider = i
}(jQuery);