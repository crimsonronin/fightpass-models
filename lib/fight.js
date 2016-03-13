/**
 * @author Josh Stuart <joshstuartx@gmail.com>
 */

import _ from 'lodash';
import mongoose from 'mongoose';
import Fighter from './fighter';

const Schema = mongoose.Schema;

const FightSchema = new Schema({
    date: Date,
    order: Number,
    fighters: {
        0: {
            type: Fighter.schema
        },
        1: {
            type: Fighter.schema
        }
    }
});

module.exports = mongoose.model('Fight', FightSchema);
