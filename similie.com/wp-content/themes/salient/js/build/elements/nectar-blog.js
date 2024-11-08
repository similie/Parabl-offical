! function(t) {
    "use strict";

    function e(t, e, i) {
        if (this.el = t, this.fullWidthSections = e, this.blogLoadIn = i, this.blogMediaQuerySize = "", this.el.find("img.nectar-lazy").length > 0) {
            var a = this;
            setTimeout(function() {
                a.init(), a.resizeBind()
            }, 100)
        } else this.init(), this.resizeBind()
    }
    e.prototype.init = function() {
        var e = this;
        this.el.find("article").addClass("masonry-blog-item"), this.el.parent().hasClass("masonry") && this.el.parents(".blog-fullwidth-wrap").length > 0 && (this.el.parents(".wpb_row").length > 0 && this.el.parents(".wpb_row").css("z-index", 100), this.el.parent().hasClass("meta_overlaid") || this.el.parent().hasClass("auto_meta_overlaid_spaced") ? (this.el.parent().parents(".full-width-content").addClass("meta-overlaid"), t(".container-wrap").addClass("meta_overlaid_blog")) : 0 == t("#salient-delay-js-js").length && (this.el.parent().hasClass("classic_enhanced") ? this.el.parent().parents(".full-width-content").css({
            padding: "0px 0.2% 0px 2.4%"
        }) : this.el.parent().parents(".full-width-content").css({
            padding: "0px 0.2% 0px 3.2%"
        })), this.fullWidthSections());
        var i = 3,
            a = this.el,
            s = !(t("body.rtl").length > 0);
        0 == this.el.find("img").length && (a = t("<img />")), imagesLoaded(a, function(a) {
            var n;
            (t("body").hasClass("mobile") || e.el.parents(".post-area").hasClass("span_9")) && (i = 2), e.el.parent().hasClass("classic_enhanced") && (e.el.find(".large_featured.has-post-thumbnail .post-featured-img, .wide_tall.has-post-thumbnail .post-featured-img").each(function() {
                var e = t(this).find("img").attr("src");
                t(this).css("background-image", "url(" + e + ")")
            }), e.el.find(".large_featured .nectar-flickity, .wide_tall .nectar-flickity").each(function() {
                t(this).find(".cell").each(function() {
                    var e = t(this).find("img").attr("src");
                    t(this).css("background-image", "url(" + e + ")")
                })
            })), i = e.blogColumnNumbCalcs(), e.blogHeightCalcs(i), e.el.parents(".post-area.meta_overlaid").length > 0 ? e.el.isotope({
                itemSelector: "article",
                transitionDuration: "0s",
                layoutMode: "packery",
                isOriginLeft: s,
                packery: {
                    gutter: 0
                }
            }).isotope("layout") : (e.el.parent().hasClass("classic_enhanced") ? n = 0 == e.el.parents(".span_9.masonry").length ? window.innerWidth >= 1600 ? .015 : .02 : .04 : (n = 0 == e.el.parents(".span_9.masonry").length ? .03 : .055, e.el.parents(".blog-fullwidth-wrap").length > 0 && (n = .02)), e.el.isotope({
                itemSelector: "article",
                transitionDuration: "0s",
                layoutMode: "packery",
                isOriginLeft: s,
                packery: {
                    gutter: e.el.parents(".post-area").width() * n
                }
            }).isotope("layout")), e.blogLoadIn(e.el), e.flickityBlogInit(), t(window).trigger("resize")
        }), setTimeout(e.blogMasonryZindex.bind(e), 700)
    }, e.prototype.flickityBlogInit = function() {
        if (0 == t(".nectar-flickity.masonry.not-initialized").length || !t().flickity) return !1;
        t(".nectar-flickity.masonry.not-initialized").each(function() {
            t(this).parents("article").hasClass("large_featured") && t(this).insertBefore(t(this).parents("article").find(".content-inner"))
        }), t(".nectar-flickity.masonry.not-initialized").flickity({
            contain: !0,
            draggable: !1,
            lazyLoad: !1,
            imagesLoaded: !0,
            percentPosition: !0,
            prevNextButtons: !0,
            pageDots: !1,
            resize: !0,
            setGallerySize: !0,
            wrapAround: !0,
            accessibility: !1
        }), t(".nectar-flickity.masonry").removeClass("not-initialized"), t(".nectar-flickity.masonry:not(.not-initialized)").each(function() {
            0 == t(this).find(".item-count").length && (t('<div class="item-count"/>').insertBefore(t(this).find(".flickity-prev-next-button.next")), t(this).find(".item-count").html('<span class="current">1</span>/<span class="total">' + t(this).find(".flickity-slider .cell").length + "</span>"), t(this).find(".flickity-prev-next-button, .item-count").wrapAll('<div class="control-wrap" />'), t(this).parents("article").hasClass("wide_tall") && 0 == t(this).parents(".masonry.material").length && t(this).find(".control-wrap").insertBefore(t(this)))
        }), t(".masonry .flickity-prev-next-button.previous, .masonry .flickity-prev-next-button.next").on("click", function() {
            t(this).parents(".wide_tall").length > 0 ? t(this).parent().find(".item-count .current").html(t(this).parents("article").find(".nectar-flickity .cell.is-selected").index() + 1) : t(this).parent().find(".item-count .current").html(t(this).parents(".nectar-flickity").find(".cell.is-selected").index() + 1)
        }), t("body").on("mouseover", ".flickity-prev-next-button.next", function() {
            t(this).parent().find(".flickity-prev-next-button.previous, .item-count").addClass("next-hovered")
        }), t("body").on("mouseleave", ".flickity-prev-next-button.next", function() {
            t(this).parent().find(".flickity-prev-next-button.previous, .item-count").removeClass("next-hovered")
        })
    }, e.prototype.blogHeightCalcs = function(e) {
        var i;
        if (this.el.parent().hasClass("meta_overlaid") && this.el.find('article[class*="regular"]:not(.format-link):not(.format-quote)').length > 0) {
            t.each(this.el, function(i, a) {
                var s = 1 == e ? 1 : 2;
                0 == t("html.no-csstransitions").length ? (t(a).find('article[class*="regular"]').css("width", Math.floor(t(a).width() / e) + "px"), t(a).find('article[class*="tall"]').css("width", Math.floor(t(a).width() / e * s) + "px")) : t(".post-area.masonry").css("width", "100%")
            }), this.el.find('article[class*="regular"] img:not([data-nectar-img-src])').css("height", "auto"), i = Math.ceil(this.el.find('article[class*="regular"]:not(".format-link"):not(".format-quote") img').first().height());
            var a = window.innerWidth > 690 ? 2 : 1;
            this.el.find('article[class*="tall"] img, .article.wide img, article.regular img').removeClass("auto-height"), this.el.find('article[class*="tall"] img').css("height", i * a), this.el.find('article[class*="regular"] img').css("height", i), this.el.find("article.regular.format-link, article.regular.format-quote").each(function() {
                window.innerWidth > 690 ? t(this).css({
                    height: i
                }) : t(this).css({
                    height: "auto"
                })
            }), this.el.find("article.wide_tall.format-link, article.wide_tall.format-quote, article.large_featured.format-link, article.large_featured.format-quote").each(function() {
                window.innerWidth > 690 ? t(this).css({
                    height: i * a
                }) : t(this).css({
                    height: "auto"
                })
            })
        } else this.el.find('article[class*="tall"] img, article.regular img').addClass("auto-height"), this.el.parent().hasClass("meta_overlaid") && this.el.find("article.regular.format-link, article.regular.format-quote").each(function() {
            window.innerWidth > 690 ? t(this).css({
                height: t(this).width()
            }) : t(this).css({
                height: "auto"
            })
        });
        this.el.parent().hasClass("classic_enhanced") && this.el.find('article[class*="regular"]').length > 0 ? (t(window).width() > 690 ? this.classicEnhancedSizing(this.el.find("article:not(.large_featured):not(.wide_tall)")) : this.classicEnhancedSizing(this.el.find("article:not(.wide_tall)")), i = this.el.find('article[class*="regular"]:not(".format-link"):not(".format-quote").has-post-thumbnail').first().length > 0 ? Math.ceil(this.el.find('article[class*="regular"]:not(".format-link"):not(".format-quote").has-post-thumbnail').first().css("height", "auto").height()) : 600, t(window).width() > 690 ? this.el.find('article.large_featured, article.regular, article[class*="wide_tall"]').css("height", i) : this.el.find('article.regular, article[class*="wide_tall"]').css("height", i)) : this.el.parent().hasClass("classic_enhanced") && 0 == this.el.find('article[class*="regular"]').length && (i = this.el.find('article[class*="regular"]:not(".format-link"):not(".format-quote").has-post-thumbnail').first().length > 0 ? Math.ceil(this.el.find('article[class*="regular"]:not(".format-link"):not(".format-quote").has-post-thumbnail').first().css("height", "auto").height()) : 600, t(window).width() > 690 ? this.el.find('article.large_featured, article.regular, article[class*="wide_tall"]').css("height", i) : this.el.find('article.regular, article[class*="wide_tall"]').css("height", i)), t("html.no-csstransitions").length > 0 && t(".post-area.masonry").css("width", "100%")
    }, e.prototype.classicEnhancedSizing = function(e) {
        var i = 0;
        e.find(".article-content-wrap").css("height", "auto"), e.filter(".has-post-thumbnail").each(function() {
            i = t(this).find(".article-content-wrap").outerHeight(!0) > i ? t(this).find(".article-content-wrap").outerHeight(!0) : i
        }), e.filter(".has-post-thumbnail").find(".article-content-wrap").css("height", i)
    }, e.prototype.resizeBind = function() {
        var e = this;
        t(window).on("resize", function() {
            setTimeout(e.resize.bind(e), 30)
        }), t(window).on("smartresize", function() {
            setTimeout(e.blogMasonryZindex.bind(e), 700)
        })
    }, e.prototype.resize = function() {
        var t, e = this.blogColumnNumbCalcs();
        this.blogHeightCalcs(e), this.el.parents(".post-area.meta_overlaid").length > 0 ? this.el.isotope({
            layoutMode: "packery",
            packery: {
                gutter: 0
            }
        }) : (this.el.parent().hasClass("classic_enhanced") ? t = 0 == this.el.parents(".span_9.masonry").length ? window.innerWidth >= 1600 ? .015 : .02 : .04 : (t = 0 == this.el.parents(".span_9.masonry").length ? .03 : .055, this.el.parents(".blog-fullwidth-wrap").length > 0 && (t = .02)), this.el.isotope({
            layoutMode: "packery",
            packery: {
                gutter: this.el.parents(".post-area").width() * t
            }
        }))
    }, e.prototype.removeDuplicates = function(t) {
        var e, i = t.length,
            a = [],
            s = {};
        for (e = 0; e < i; e++) s[t[e]] = 0;
        for (e in s) a.push(e);
        return a
    }, e.prototype.blogMasonryZindex = function() {
        if (t("body .post-area .masonry-blog-item").length > 0 && t("body .post-area .masonry-blog-item").offset().left) {
            var e = {},
                i = {},
                a = this.el;
            this.el.find(".masonry-blog-item").each(function() {
                var i = t(this).offset();
                i = i.left, e[t(this).index()] = i, t(this).css("z-index", Math.abs(Math.floor(t(this).offset().left / 20)))
            });
            var s = t.map(e, function(t) {
                return t
            });
            (s = this.removeDuplicates(s)).sort(function(t, e) {
                return t - e
            });
            for (var n = 0; n < s.length; n++) i[s[n]] = 1 * n;
            t.each(e, function(e, s) {
                var n, l = s;
                t.each(i, function(t, e) {
                    l == t && (n = e)
                }), a.find(".masonry-blog-item:eq(" + e + ")").css("z-index", n).attr("data-delay-amount", n)
            })
        }
    }, e.prototype.blogColumnNumbCalcs = function() {
        var e = 3;
        if (t("body").hasClass("mobile") && window.innerWidth < 990 || this.el.parents(".post-area").hasClass("span_9") && 0 == this.el.parents(".post-area.meta_overlaid").length) e = 2;
        else if (this.el.parents(".post-area").hasClass("full-width-content") || this.el.parents(".post-area").parent().hasClass("full-width-content") && 0 == t("#boxed").length || this.el.parents(".post-area.meta_overlaid").length > 0) switch (window.innerWidth >= 1600 ? this.blogMediaQuerySize = this.el.parents(".post-area.meta_overlaid").length > 0 ? "four" : "five" : window.innerWidth < 1600 && window.innerWidth >= 1300 ? this.blogMediaQuerySize = "four" : window.innerWidth < 1300 && window.innerWidth >= 990 ? this.blogMediaQuerySize = this.el.parents(".post-area.meta_overlaid").length > 0 ? "four" : "three" : window.innerWidth < 990 && window.innerWidth >= 470 ? this.blogMediaQuerySize = "two" : window.innerWidth < 470 && (this.blogMediaQuerySize = this.el.parents(".post-area.meta_overlaid").length > 0 ? "two" : "one"), t("#boxed").length > 0 && (window.innerWidth > 1300 ? this.blogMediaQuerySize = "four" : window.innerWidth < 1300 && window.innerWidth > 990 ? this.blogMediaQuerySize = this.el.parents(".post-area.meta_overlaid").length > 0 ? "four" : "three" : window.innerWidth < 990 && (this.blogMediaQuerySize = this.el.parents(".post-area.meta_overlaid").length > 0 ? "two" : "one")), this.blogMediaQuerySize) {
            case "five":
                e = 5;
                break;
            case "four":
                e = 4;
                break;
            case "three":
                e = 3;
                break;
            case "two":
                e = 2;
                break;
            case "one":
                e = 1
        } else e = 3;
        return e
    }, window.NectarMasonryBlog = e
}(jQuery);