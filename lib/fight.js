/**
 * @author Josh Stuart <joshstuartx@gmail.com>
 */

import _ from 'lodash';
import mongoose from 'mongoose';
import Fighter from './fighter';
const Schema = mongoose.Schema;

function FightModel() {
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

    return mongoose.model('Fight', FightSchema);
}

export default new FightModel();
