/**
 * @author Josh Stuart <joshstuartx@gmail.com>
 */

import _ from 'lodash';
import mongoose from 'mongoose';
import Fight from './fight';

const Schema = mongoose.Schema;

const EventSchema = new Schema({
    name: String,
    date: Date,
    fights: [
        {
            type: Fight.schema
        }
    ]
});

module.exports = mongoose.model('Event', EventSchema);
