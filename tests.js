const expect = chai.expect;

// INTEGER TO ROMAN TESTS
describe('Integer to Roman', function() {
    
    it('TC-1: should convert 1 to 'I'', function() {
        expect(toRoman(1)).to.equal('I');
    });
    
    it('TC-2: should convert 4 to 'IV'', function() {
        expect(toRoman(4)).to.equal('IV');
    });
    
    it('TC-3: should convert 3999 to 'MMMCMXCIX'', function() {
        expect(toRoman(3999)).to.equal('MMMCMXCIX');
    });
    
    it('TC-4: should convert 0 to 'Invalid (1-3999)'', function() {
        expect(toRoman(0)).to.equal('Invalid (1-3999)');
    });
    
    it('TC-5: should convert 4000 to 'Invalid (1-3999)'', function() {
        expect(toRoman(4000)).to.equal('Invalid (1-3999)');
    });
    
    it('TC-6: should convert -1 to 'Invalid (1-3999)'', function() {
        expect(toRoman(-1)).to.equal('Invalid (1-3999)');
    });

    it('TC-7: should convert +1 to 'I'', function() {
        expect(toRoman(1)).to.equal('I');
    });
    
    it('TC-8: should convert 10.5 to 'Invalid (1-3999)'', function() {
        expect(toRoman(10.5)).to.equal('Invalid (1-3999)');
    });
    
    it('TC-9: should convert 'a' to 'Invalid (1-3999)'', function() {
        expect(toRoman('a')).to.equal('Invalid (1-3999)');
    });
    
    it('TC-10: should convert 2 to 'II'', function() {
        expect(toRoman(2)).to.equal('II');
    });
    
    it('TC-11: should convert 44 to 'XLIV'', function() {
        expect(toRoman(44)).to.equal('XLIV');
    });
    
    it('TC-12: should convert 99 to 'XCIX'', function() {
        expect(toRoman(99)).to.equal('XCIX');
    });
    
    it('TC-13: should convert 500 to 'D'', function() {
        expect(toRoman(500)).to.equal('D');
    });

    it('TC-14: should convert 0 to 'Invalid (1-3999)'', function() {
        expect(toRoman(0)).to.equal('Invalid (1-3999)');
    });
});

// ROMAN TO INTEGER TESTS
describe('Roman to Integer', function() {
    
    it('TC-1: should convert 'II' to 2', function() {
        expect(toDecimal('II')).to.equal(2);
    });
    
    it('TC-2: should convert 'CDII' to 402', function() {
        expect(toDecimal('CDII')).to.equal(402);
    });
    
    it('TC-3: should convert 'VV' to 'Invalid Roman'', function() {
        expect(toDecimal('VV')).to.equal('Invalid Roman');
    });
    
    it('TC-4: should convert 'A' to 'Invalid Roman'', function() {
        expect(toDecimal('A')).to.equal('Invalid Roman');
    });

    it('TC-5: should convert ' 'I' ' to 'Invalid Roman'', function() {
        expect(toDecimal(' 'I' ')).to.equal('Invalid Roman');
    });
    
    it('TC-6: should convert '1' to 'Invalid Roman'', function() {
        expect(toDecimal('1')).to.equal('Invalid Roman');
    });
    
    it('TC-7: should convert 'III' to 3', function() {
        expect(toDecimal('III')).to.equal(3);
    });
    
    it('TC-8: should convert 'VXX' to 'Invalid Roman'', function() {
        expect(toDecimal('VXX')).to.equal('Invalid Roman');
    });
    
    it('TC-9: should convert 'MMMCMXCIX' to 3999', function() {
        expect(toDecimal('MMMCMXCIX')).to.equal(3999);
    });
    
    it('TC-10: should convert 'MC M' to 'Invalid Roman'', function() {
        expect(toDecimal('MC M')).to.equal('Invalid Roman');
    });
});
