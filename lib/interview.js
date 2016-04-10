/**
 * @author Josh Stuart <joshstuartx@gmail.com>
 */

import _ from 'lodash';
import mongoose from 'mongoose';
import Metadata from './metadata';

const Schema = mongoose.Schema;

function InterviewModel() {
    const InterviewSchema = new Schema({
        title: String,
        date: Date,
        metadata: {
            type: Metadata.schema
        }
    });

    return mongoose.model('Event', InterviewSchema);
}

export default new InterviewModel();
