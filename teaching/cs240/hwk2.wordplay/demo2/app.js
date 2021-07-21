function c(a) {
  var b = 0;
  return function () {
    return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
  };
}
function d(a) {
  var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
  return b ? b.call(a) : { next: c(a) };
}
function f(a) {
  for (var b, e = []; !(b = a.next()).done; ) e.push(b.value);
  return e;
}
for (
  var h = {}, k = [], l = [], m = [], p = d(dictionary), q = p.next();
  !q.done;
  q = p.next()
) {
  var r = q.value;
  3 <= r.length && 6 >= r.length && ((h[r] = !0), 6 == r.length && k.push(r));
}
for (var t = null; null == t || 6 != t.length || -1 == k.indexOf(t); )
  t = prompt("Input a 6-letter root word");
m.push(t);
for (var v = u(t), w = d(v), x = w.next(); !x.done; x = w.next()) {
  var y = x.value;
  h[y] && l.push(y);
}
var z = null;
do {
  for (var A = "", B = d(l), C = B.next(); !C.done; C = B.next())
    A += C.value + "\n";
  z = prompt(A + "\n\nEnter a guess: ");
  null != z &&
    (-1 < m.indexOf(z)
      ? alert("Already guessed " + z + "!")
      : -1 < l.indexOf(z)
      ? (alert("Correct! " + z), m.push(z))
      : alert(z + " is not a word!"));
} while (null != z && m.length < l.length);
var E = "You answered " + m.length + " out of " + l.length + "!\n\n",
  F = d(l);
for (C = F.next(); !C.done; C = F.next()) E += C.value + "\n";
alert(E);
function u(a) {
  if (0 == a.length) return new Set().add("");
  var b = a[0];
  a = u(a.substring(1));
  for (
    var e = new Set(), D = d(a.values()), g = D.next();
    !g.done;
    g = D.next()
  ) {
    g = g.value;
    for (var n = 0; n <= g.length; n++)
      e.add(g.substring(-1, n) + b + g.substring(n));
  }
  return new Set(
    [].concat(
      a instanceof Array ? a : f(d(a)),
      e instanceof Array ? e : f(d(e))
    )
  );
}
