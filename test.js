const test = require('brittle')
const set = require('./')

test('add', function (t) {
  const list = []
  const a = { hello: 'world' }
  const b = { hello: 'verden' }

  set.add(list, a)
  set.add(list, b)

  t.alike(list, [a, b])
})

test('add twice', function (t) {
  const list = []
  const a = { hello: 'world' }
  const b = { hello: 'verden' }

  set.add(list, a)
  set.add(list, b)
  set.add(list, b)

  t.alike(list, [a, b])
})

test('remove', function (t) {
  const list = []
  const a = { hello: 'world' }
  const b = { hello: 'verden' }

  set.add(list, a)
  set.add(list, b)
  set.remove(list, a)

  t.alike(list, [b])
})

test('remove twice', function (t) {
  const list = []
  const a = { hello: 'world' }
  const b = { hello: 'verden' }

  set.add(list, a)
  set.add(list, b)
  set.remove(list, a)
  set.remove(list, a)

  t.alike(list, [b])
})

test('remove all', function (t) {
  const list = []
  const a = { hello: 'world' }
  const b = { hello: 'verden' }

  set.add(list, a)
  set.add(list, b)
  set.remove(list, a)
  set.remove(list, b)

  t.alike(list, [])
})

test('re-add', function (t) {
  const list = []
  const a = { hello: 'world' }
  const b = { hello: 'verden' }

  set.add(list, a)
  set.add(list, b)
  set.remove(list, a)
  set.remove(list, b)
  set.add(list, b)
  set.add(list, a)

  t.alike(list, [b, a])
})

test('has', function (t) {
  const list = []
  const a = { hello: 'world' }
  const b = { hello: 'verden' }

  set.add(list, a)
  set.add(list, b)
  set.remove(list, a)

  t.ok(!set.has(list, a))
  t.ok(set.has(list, b))
})

test('swap', function (t) {
  const list = []
  const a = { hello: 'world' }
  const b = { hello: 'verden' }

  set.add(list, a)
  set.add(list, b)

  set.swap(list, a, b)
  t.alike(list, [b, a])

  set.swap(list, a, b)
  t.alike(list, [a, b])
})

test('swap same', function (t) {
  const list = []
  const a = { hello: 'world' }

  set.add(list, a)

  set.swap(list, a, a)
  t.alike(list, [a])
})
