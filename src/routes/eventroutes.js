const express = require('express');
const eventRouter = express.Router();

const eventsData = [
    {
        FromYear: 101,
        ToYear: 102,
        Title: 'Event One',
        Content: 'One x One = One'
    },
    {
        FromYear: 103,
        ToYear: 104,
        Title: 'Event Two',
        Content: 'Two x Two = Four'
    },
    {
        FromYear: 106,
        ToYear: 109,
        Title: 'Event Three',
        Content: 'Three x Three = Nine'
    },
    {
        FromYear: 110,
        ToYear: 114,
        Title: 'Event Four',
        Content: 'Four x Four = Sixteen'
    },
];

eventRouter.route('/')
    .get((req, res) => {
        res.render('events', {
            events: eventsData
        });
    });

eventRouter.route('/:id')
    .get((req, res) => {
        const id = req.params.id;
        res.render('event', {
            events: eventsData[id]
        });
    });

module.exports = eventRouter;