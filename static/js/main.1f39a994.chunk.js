;(this["webpackJsonpmy-flex-pomodoro"] =
  this["webpackJsonpmy-flex-pomodoro"] || []).push([
  [0],
  {
    32: function (e, t, a) {},
    45: function (e, t, a) {
      e.exports = a(57)
    },
    50: function (e, t, a) {},
    57: function (e, t, a) {
      "use strict"
      a.r(t)
      var n = a(0),
        r = a.n(n),
        o = a(17),
        l = a.n(o),
        c = (a(50), a(32), a(33), a(4)),
        s = a(77),
        i = a(73),
        m = a(78),
        u = a(76),
        d = a(74),
        p = a(75),
        b = a(35),
        E = a.n(b),
        f = (a(51), a(26)),
        g = a(36),
        x = a(41)
      var O = function (e) {
          var t = Object(n.useState)([]),
            a = Object(c.a)(t, 2),
            o = a[0],
            l = a[1],
            m = Object(n.useState)([]),
            b = Object(c.a)(m, 2),
            E = b[0],
            O = b[1],
            h = Object(n.useState)([]),
            y = Object(c.a)(h, 2),
            j = y[0],
            k = y[1],
            S = Object(n.useState)([]),
            v = Object(c.a)(S, 2),
            F = v[0],
            w = v[1],
            N = Object(n.useState)(!0),
            R = Object(c.a)(N, 2),
            T = R[0],
            W = R[1],
            A = Object(n.useState)(!1),
            B = Object(c.a)(A, 2),
            L = B[0],
            I = B[1],
            C = Object(n.useState)(60),
            K = Object(c.a)(C, 2),
            M = K[0],
            U = K[1],
            H = Object(n.useState)("bg1"),
            z = Object(c.a)(H, 2),
            P = z[0],
            q = z[1],
            D = Object(n.useState)(0),
            G = Object(c.a)(D, 2),
            J = G[0],
            Y = G[1],
            X = Object(n.useState)(!0),
            $ = Object(c.a)(X, 2),
            Q = $[0],
            V = $[1],
            Z = Object(n.useState)(!1),
            _ = Object(c.a)(Z, 2),
            ee = _[0],
            te = _[1],
            ae = Object(n.useState)(!1),
            ne = Object(c.a)(ae, 2),
            re = ne[0],
            oe = ne[1],
            le = Object(n.useState)(!1),
            ce = Object(c.a)(le, 2),
            se = ce[0],
            ie = ce[1],
            me = Object(n.useState)([{}]),
            ue = Object(c.a)(me, 2),
            de = ue[0],
            pe = ue[1]
          return (
            Object(n.useEffect)(function () {
              pe(e.dataofpomodoro)
            }, []),
            Object(n.useEffect)(
              function () {
                "NaN" == o && l([])
              },
              [o]
            ),
            Object(n.useEffect)(
              function () {
                if (L) {
                  if (T && -3 != de[0].session) {
                    var e = setTimeout(function () {
                      if (T) {
                        var e = F
                        w((e -= 1))
                      }
                    }, 1e3)
                    return function () {
                      return clearTimeout(e)
                    }
                  }
                  var t = setTimeout(function () {
                    T && (w(0), O([]))
                  }, 500)
                  return function () {
                    return clearTimeout(t)
                  }
                }
              },
              [F]
            ),
            Object(n.useEffect)(
              function () {
                var t = E
                if (0.6 < E % 1) {
                  t -= 0.4
                  var a = parseFloat(t).toFixed(2)
                  O(a)
                }
                if (0 === F)
                  if ((w(60), 0.01 == t)) {
                    Q && e.dataofpomodoro[0].session / 2 != de[0].session
                      ? setTimeout(function () {
                          O(de[0].shortbreak),
                            q("bg4"),
                            oe(!0),
                            te(!1),
                            w(60),
                            V(!1)
                        }, 5)
                      : Q && e.dataofpomodoro[0].session / 2 == de[0].session
                      ? setTimeout(function () {
                          O(de[0].longbreak),
                            q("bg4"),
                            oe(!1),
                            te(!0),
                            w(60),
                            V(!1)
                        }, 5)
                      : (O(j), w(60), V(!0))
                    var n = Object(x.a)(de),
                      r = Object(g.a)({}, n[0]),
                      o = n[0].session - 1
                    ;(r.session = o),
                      (n[0] = r),
                      pe([r]),
                      -3 === n[0].session &&
                        (ie(!0),
                        O([]),
                        w([]),
                        U([]),
                        alert("CONGRATULATIONS! Your Stop Score:" + J),
                        window.confirm
                          ? (window.location.reload(), O([]), w([]))
                          : (window.location.reload(), O([]), w([]), U([])))
                  } else {
                    var l = E,
                      c = parseFloat((l -= 0.01)).toFixed(2)
                    O(c)
                  }
              },
              [F]
            ),
            Object(n.useEffect)(
              function () {
                0 == E.length ||
                  ((de[0].shortbreak / 2 == E && !Q && re) ||
                  (de[0].longbreak / 2 == E && !Q && ee) ||
                  (j / 2 == E && Q)
                    ? q("bg3")
                    : j == E && Q
                    ? q("bg2")
                    : 0.01 == E && se
                    ? (O([]), w([]), q("bg4"))
                    : q("bg4"))
              },
              [E, Q, ee, re]
            ),
            r.a.createElement(
              "div",
              { className: "myauto text-center " + P },
              r.a.createElement(
                "h1",
                {
                  "data-aos": "fade-right",
                  "data-aos-duration": "60000",
                  className: "text-muted"
                },
                Q ? "...TIME TO WORK..." : "...BREAK TIME..."
              ),
              r.a.createElement(
                s.a,
                {
                  "data-aos-duration": "2000",
                  "data-aos": "flip-down",
                  style: { border: "20px solid #F5FFFA", boxShadow: "5px 10px" }
                },
                r.a.createElement(
                  i.a,
                  null,
                  r.a.createElement(
                    "small",
                    { className: "text-muted" },
                    L ? "" : "SET YOUR TIME TO WORK (HOUR-MINUTE)"
                  ),
                  r.a.createElement("hr", null),
                  r.a.createElement("h1", { className: "h1" }, L ? E : o),
                  r.a.createElement("p", null, F),
                  r.a.createElement(
                    u.a,
                    Object(f.a)(
                      {
                        style: { visibility: "visible" },
                        type: "time",
                        onChange: function (e) {
                          var t = e.target.value.replace(":", "."),
                            a = parseFloat(t).toFixed(2)
                          0 == a || l(a)
                        }
                      },
                      "style",
                      { margin: "5px" }
                    )
                  ),
                  r.a.createElement("hr", null),
                  r.a.createElement(
                    d.a,
                    {
                      style: {
                        textAlign: "center",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: 0
                      }
                    },
                    r.a.createElement(
                      p.a,
                      {
                        style: { textAlign: "center" },
                        disabled: 0 == o.length,
                        onClick: function (e) {
                          q("bg2"), I(!0), W(!0), O(o), k(o), w(M), l([])
                        }
                      },
                      "Start"
                    ),
                    r.a.createElement(
                      p.a,
                      {
                        disabled: (0 == E.length) | (0 == E) | (0 !== o.length),
                        onClick: function (e) {
                          if (1 == T) {
                            var t = J
                            Y((t += 1)), W(!1)
                          }
                        }
                      },
                      "Stop"
                    ),
                    r.a.createElement(
                      p.a,
                      {
                        onClick: function (e) {
                          W(!0)
                          var t = F
                          w((t -= 1))
                        },
                        disabled: T
                      },
                      "Continue"
                    ),
                    r.a.createElement("hr", null)
                  )
                )
              )
            )
          )
        },
        h = function (e) {
          var t = Object(n.useState)([{}]),
            a = Object(c.a)(t, 2),
            o = a[0],
            l = a[1],
            b = Object(n.useState)(!1),
            f = Object(c.a)(b, 2),
            g = f[0],
            x = f[1],
            h = Object(n.useState)([]),
            y = Object(c.a)(h, 2),
            j = y[0],
            k = y[1],
            S = Object(n.useState)([]),
            v = Object(c.a)(S, 2),
            F = v[0],
            w = v[1],
            N = Object(n.useState)(!1),
            R = Object(c.a)(N, 2),
            T = R[0],
            W = R[1],
            A = Object(n.useState)(!0),
            B = Object(c.a)(A, 2),
            L = B[0],
            I = B[1],
            C = function (e) {
              e.preventDefault()
              var t = new FormData(e.target),
                a = t.get("shortbreak").replace(":", "."),
                n = parseFloat(a).toFixed(2),
                r = t.get("longbreak").replace(":", "."),
                o = parseFloat(r).toFixed(2)
              ;(0 == n) | (0 == o)
                ? (alert("Short Break or Long Break cannot be 0.00  "),
                  window.confirm)
                : o < n
                ? (alert("Short Break cannot be higher than Long Break "),
                  window.confirm)
                : n == o
                ? (alert("Short Break cannot be equal to Long Break "),
                  window.confirm)
                : (l([
                    {
                      session: 4 * parseInt(t.get("session")),
                      shortbreak: n,
                      longbreak: o
                    }
                  ]),
                  k([]),
                  x(!0),
                  w([O]))
            },
            K = function () {
              W(!0), I(!1)
            },
            M = function () {
              I(!0)
            },
            U = function (e) {
              return L
                ? r.a.createElement(
                    "div",
                    { className: "myauto   text-center bgstart" },
                    r.a.createElement(
                      s.a,
                      {
                        "data-aos-duration": "2000",
                        "data-aos": T ? "flip-left" : "zoom-in",
                        style: {
                          border: "20px solid #F5FFFA",
                          boxShadow: "5px 10px"
                        }
                      },
                      r.a.createElement(
                        i.a,
                        null,
                        r.a.createElement(
                          "h1",
                          { className: "display-4 homeheadlines" },
                          "FLEX POMODORO"
                        ),
                        r.a.createElement("hr", null),
                        r.a.createElement(
                          "form",
                          { className: "", method: "post", onSubmit: C },
                          r.a.createElement(
                            m.a,
                            {
                              style: {
                                flexWrap: "column",
                                flexDirection: "column",
                                display: "flex"
                              }
                            },
                            r.a.createElement(
                              "span",
                              {
                                style: { marginRight: "10px", marginTop: "6px" }
                              },
                              r.a.createElement("span", {
                                style: { border: "1px  solid", color: "pink" }
                              }),
                              r.a.createElement(
                                "small",
                                {
                                  style: {
                                    marginLeft: "5px",
                                    textAlign: "center",
                                    color: "pink",
                                    fontWeight: "bold"
                                  }
                                },
                                "Pomodoro Session 1-4"
                              ),
                              r.a.createElement("span", {
                                style: {
                                  color: "pink",
                                  marginLeft: "5px",
                                  border: "1px solid",
                                  borderRadius: "50px"
                                }
                              })
                            ),
                            r.a.createElement(u.a, {
                              name: "session",
                              type: "number",
                              min: "4",
                              inputProps: { min: "1", max: "4", step: "1" },
                              placeholder: "Pomodoro session",
                              required: !0
                            }),
                            r.a.createElement(
                              "span",
                              {
                                style: {
                                  marginRight: "10px",
                                  marginTop: "10px"
                                }
                              },
                              r.a.createElement("span", {
                                style: { border: "1px  solid", color: "pink" }
                              }),
                              r.a.createElement(
                                "small",
                                {
                                  style: {
                                    marginLeft: "5px",
                                    textAlign: "center",
                                    color: "pink",
                                    fontWeight: "bold"
                                  }
                                },
                                "Short Break (HOUR-MINUTE)"
                              ),
                              r.a.createElement("span", {
                                style: {
                                  color: "pink",
                                  marginLeft: "5px",
                                  border: "1px solid",
                                  borderRadius: "50px"
                                }
                              })
                            ),
                            r.a.createElement(u.a, {
                              name: "shortbreak",
                              type: "time",
                              placeholder: "shortbreak",
                              required: !0
                            }),
                            r.a.createElement(
                              "span",
                              {
                                style: {
                                  marginRight: "10px",
                                  marginTop: "10px"
                                }
                              },
                              r.a.createElement("span", {
                                style: { border: "1px  solid", color: "pink" }
                              }),
                              r.a.createElement(
                                "small",
                                {
                                  style: {
                                    marginLeft: "5px",
                                    textAlign: "center",
                                    color: "pink",
                                    fontWeight: "bold"
                                  }
                                },
                                "Long Break (HOUR-MINUTE)"
                              ),
                              r.a.createElement("span", {
                                style: {
                                  color: "pink",
                                  marginLeft: "5px",
                                  border: "1px solid",
                                  borderRadius: "50px"
                                }
                              })
                            ),
                            r.a.createElement(u.a, {
                              name: "longbreak",
                              type: "time",
                              placeholder: "longbreak",
                              required: !0
                            }),
                            r.a.createElement(
                              d.a,
                              null,
                              r.a.createElement(
                                "div",
                                { className: "row" },
                                r.a.createElement(
                                  "div",
                                  { className: "container col-12" },
                                  r.a.createElement(
                                    p.a,
                                    {
                                      variant: "contained",
                                      style: {
                                        background:
                                          "linear-gradient(45deg,   rgba(249, 188, 186, 1) 5%,rgba(192, 230, 224, 1) 52%)",
                                        textAlign: "center",
                                        fontWeight: "bold",
                                        fontSize: "10px",
                                        color: "black",
                                        zIndex: "1001"
                                      },
                                      type: "submit"
                                    },
                                    "Start Pomodoro"
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    ),
                    r.a.createElement(
                      s.a,
                      {
                        "data-aos-duration": "2000",
                        "data-aos": T ? "flip-left" : "",
                        style: {
                          margin: "0px",
                          position: "relative",
                          border: "10px solid #F5FFFA",
                          boxShadow: "5px 10px",
                          borderRadius: "0"
                        }
                      },
                      r.a.createElement(
                        d.a,
                        null,
                        r.a.createElement(
                          p.a,
                          { style: { fontSize: "large" }, onClick: K },
                          r.a.createElement(
                            "div",
                            { className: "how" },
                            "How It Works"
                          )
                        )
                      )
                    ),
                    r.a.createElement(
                      s.a,
                      {
                        "data-aos-duration": "2000",
                        "data-aos": T ? "flip-left" : "",
                        style: {
                          margin: "10px",
                          position: "relative",
                          border: "10px solid #F5FFFA",
                          boxShadow: "5px 10px",
                          borderRadius: "0"
                        }
                      },
                      r.a.createElement(
                        d.a,
                        null,
                        r.a.createElement(
                          "p",
                          {
                            className: "text-muted",
                            style: {
                              marginTop: "1px !important",
                              padding: "0px !important",
                              fontSize: "15px",
                              fontWeight: "bold"
                            }
                          },
                          "Created By",
                          " ",
                          r.a.createElement(
                            "a",
                            { href: "https://github.com/kurtfatih" },
                            "@Fatih Kurt"
                          )
                        ),
                        r.a.createElement(
                          "div",
                          { className: "text-muted" },
                          "v/1.0"
                        )
                      )
                    )
                  )
                : r.a.createElement(
                    "div",
                    { className: "myauto text-center bgstart" },
                    r.a.createElement(
                      s.a,
                      { "data-aos-duration": "2000", "data-aos": "flip-left" },
                      r.a.createElement(
                        i.a,
                        null,
                        r.a.createElement(
                          "div",
                          { className: "row p-4 text-center" },
                          r.a.createElement(
                            "div",
                            {
                              className: "col-sm-12 pomodorosession",
                              style: { maxWidth: 300, maxHeight: 500 }
                            },
                            r.a.createElement("hr", null),
                            r.a.createElement(
                              "h3",
                              { className: "display-3 " },
                              "1 SESSION"
                            ),
                            r.a.createElement("hr", null),
                            r.a.createElement(
                              "div",
                              { className: "row text-center" },
                              r.a.createElement(
                                "p",
                                { style: { color: "green" } },
                                "WORK"
                              ),
                              r.a.createElement("p", null, "|"),
                              r.a.createElement(
                                "p",
                                { style: { color: "red" } },
                                "SHORT BREAK"
                              ),
                              r.a.createElement("p", null, "|"),
                              r.a.createElement(
                                "p",
                                { style: { color: "green" } },
                                "WORK"
                              ),
                              r.a.createElement("p", null, "|"),
                              r.a.createElement(
                                "p",
                                { style: { color: "red", fontWeight: "bold" } },
                                "LONG BREAK"
                              ),
                              r.a.createElement("p", null, "|"),
                              " ",
                              r.a.createElement(
                                "p",
                                { style: { color: "green" } },
                                "WORK"
                              ),
                              r.a.createElement("p", null, "|"),
                              r.a.createElement(
                                "p",
                                { style: { color: "red" } },
                                "SHORT BREAK"
                              ),
                              r.a.createElement("p", null, "|"),
                              r.a.createElement(
                                "p",
                                { style: { color: "green" } },
                                "WORK"
                              )
                            )
                          )
                        )
                      ),
                      r.a.createElement(
                        d.a,
                        null,
                        r.a.createElement(p.a, { onClick: M }, "Go Back")
                      )
                    )
                  )
            }
          return (
            Object(n.useEffect)(
              function () {
                g ? k([]) : (E.a.init(), k([U]))
              },
              [g, L]
            ),
            g
              ? g
                ? r.a.createElement(
                    r.a.Fragment,
                    null,
                    F.map(function (e, t) {
                      return r.a.createElement(e, { key: t, dataofpomodoro: o })
                    })
                  )
                : void 0
              : r.a.createElement(
                  r.a.Fragment,
                  null,
                  j.map(function (e, t) {
                    return r.a.createElement(
                      r.a.Fragment,
                      null,
                      r.a.createElement(e, { key: t })
                    )
                  })
                )
          )
        },
        y = function () {
          return r.a.createElement(
            "div",
            null,
            r.a.createElement(h, { key: "1" })
          )
        },
        j = a(40),
        k = a(6)
      var S = function () {
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            j.a,
            null,
            r.a.createElement(
              k.c,
              null,
              r.a.createElement(
                k.a,
                { key: "1", path: "/" },
                r.a.createElement(y, { key: "1" })
              )
            )
          )
        )
      }
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      )
      l.a.render(
        r.a.createElement(r.a.StrictMode, null, r.a.createElement(S, null)),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister()
            })
            .catch(function (e) {
              console.error(e.message)
            })
    }
  },
  [[45, 1, 2]]
])
//# sourceMappingURL=main.1f39a994.chunk.js.map
