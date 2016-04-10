/**
 * @author Josh Stuart <joshstuartx@gmail.com>.
 */
import should from 'should';
import Event from '../../lib/event';

describe('Event', () => {
    it('should instantiate an event model', (done) => {
        const mmaEvent = new Event({
            name: 'UFC 196',
            title: 'McGregor vs Diaz',
            date: 'March 5, 2016',
            metadata: {
                city: 'Las Vegas',
                venue: 'MGM Grand Garden Arena'
            }
        });

        mmaEvent.name.should.eql('UFC 196');
        done();
    });
});
