import test from 'ava';
import request from 'supertest';
import server from '../src';

test('GET / : hello from server', async t => {
    t.plan(1);
    const res = await request(server.listener).get('/');
    t.is(res.status, 200);
});
