import test from 'ava';
import request from 'supertest';
import server from '../src';
import Requester from '../src/db';
import session from '../src/db/session';

const db = new Requester(session);

test.before('DB CLEAN UP', async t => {
    t.plan(1);
    const res = await db.createNode('Person');
    t.is(true, !!res)
})

test('GET / : hello from server', async t => {
    t.plan(1);
    const res = await request(server.listener).get('/');
    t.is(res.status, 200);
});
