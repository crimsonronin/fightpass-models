/**
 * @author Josh Stuart <joshstuartx@gmail.com>
 */

import _ from 'lodash';
import mongoose from 'mongoose';
import Fight from './fight';
import Metadata from './metadata';

const Schema = mongoose.Schema;

function EventModel() {
    const EventSchema = new Schema({
        name: String,
        title: String,
        date: Date,
        fights: [
            Fight.schema
        ],
        location: {
            city: String,
            state: String,
            country: String,
            venue: String
        },
        metadata: {
            type: Metadata.schema
        }
    });

    return mongoose.model('Event', EventSchema);
}

export default new EventModel();
