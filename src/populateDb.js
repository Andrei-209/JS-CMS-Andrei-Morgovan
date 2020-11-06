const db = require('./db');

// @todo: populează de aici baza de date cu mai multe intrări pentru a fi ușor de testat
const populate = () => {
    db.add('posts', {
        title: '🚀 My first blog post!!!',
        content: 'Well, it works. Welcome to my blog.',
        slug: 'post-1',
    });

    db.add('posts', {
        title: '🚀 My second blog post!!!',
        content: 'Well, it works. Welcome to my second blog.',
        slug: 'post-2',
    });

    db.add('posts', {
        title: '🚀 My third blog post!!!',
        content: 'Well, it works. Welcome to my third blog.',
        slug: 'post-3',
    });
};

module.exports = populate
