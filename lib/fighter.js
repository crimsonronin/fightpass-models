/**
 * @author Josh Stuart <joshstuartx@gmail.com>
 */

import _ from 'lodash';
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

function FighterModel() {
    const FighterSchema = new Schema({
        firstName: String,
        lastName: String,
        nickname: String,
        record: {
            wins: {
                type: Number,
                default: 0
            },
            loses: {
                type: Number,
                default: 0
            },
            noContests: {
                type: Number,
                default: 0
            }
        },
        social: {
            facebook: String,
            twitter: String,
            instagram: String
        }
    });

    return mongoose.model('Fighter', FighterSchema);
}

export default new FighterModel();
