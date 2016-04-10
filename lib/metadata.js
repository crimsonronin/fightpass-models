/**
 * @author Josh Stuart <joshstuartx@gmail.com>
 */

import _ from 'lodash';
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MetadataSchema = new Schema({
    url: String,
    date: Date,
    title: String,
    description: String,
    keywords: [String]
});

export default mongoose.model('Metadata', MetadataSchema);
