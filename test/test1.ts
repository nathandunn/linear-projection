
// from MultiSequenceProjectionSpec

import SequenceRegion, {UNMAPPED_REGION} from '../src/projection/typescript/SequenceRegion';
import { expect } from 'chai';
import VisibleRegion from "../src/projection/typescript/VisibleRegion";
import {TreeMap, Pair} from "tstl/lib/tstl";
// import ExtendedTreeMap from "../src/projection/typescript/ExtendedTreeMap";
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
// import 'mocha';

// describe('ExtendedTreeMap tests', () => {
//     it('ExtendedTreeMap, floor', () => {
//         let map:ExtendedTreeMap<number,VisibleRegion> = new ExtendedTreeMap();
//         let region1:VisibleRegion = new VisibleRegion(3,4);
//         let region2:VisibleRegion = new VisibleRegion(7,9);
//         map.insert(new Pair<number,VisibleRegion>(3,region1));
//         map.insert(new Pair<number,VisibleRegion>(7,region2));
//
//
//     });
//     it('ExtendedTreeMap, ceil', () => {
//     });
// });

describe('SequenceRegion Sorted test', () => {
    let start = 0 ;
    let end = 100 ;
    let name = 'chr1';
    let region = new SequenceRegion(name,start,end);
    region.addVisibleRegionByCoordinates(5,8) ;
    region.addVisibleRegionByCoordinates(1,3) ;
    region.addVisibleRegionByCoordinates(15,22) ;
    it('SequenceRegion Sorted', () => {
        region.checkSort();
        expect(region.isSorted).to.equal(true);
        let v = -1 ;
        for(let r of region.regions){
            console.log(r.start +' -> '+ v );
            expect(v).lessThan(r.start);
            v = r.start ;
        }


    });
});

describe('SequenceRegion Tests ', () => {
    let start = 0 ;
    let end = 100 ;
    let name = 'chr1';
    const region = new SequenceRegion(name,start,end);
    region.addVisibleRegionByCoordinates(4,6) ;
    it('SequenceRegion Tests, floor', () => {
    });
});

describe('Overlapping ProjectedRegions should be the union', () => {
    it('Should build a sequence region', () => {
        let start = 0 ;
        let end = 100 ;
        let name = 'chr1';
        const region = new SequenceRegion(name,start,end);

        region.clearVisibleRegions(); // TODO: remove this when we properly introduce replace
        region.addVisibleRegionByCoordinates(0,2) ;
        region.addVisibleRegionByCoordinates(4,6) ;
        region.addVisibleRegionByCoordinates(8,9) ;

        expect(region.regions.length,'Number of ranges should be correct').to.equal(3);
        // expect(region.regions.length,'maxMap should be correct').to.equal(3);
        expect(region.projectValue(0)).to.equal(0);
        expect(region.projectValue(1)).to.equal(1);
        expect(region.projectValue(2)).to.equal(2);
        expect(region.projectValue(3)).to.equal(UNMAPPED_REGION);
        // expect(region.projectValue(4)).to.equal(3);
        // expect(region.projectValue(5)).to.equal(4);
        // expect(region.projectValue(6)).to.equal(5);
        // expect(region.projectValue(7)).to.equal(UNMAPPED_REGION);
        // expect(region.projectValue(8)).to.equal(6);
        // expect(region.projectValue(9)).to.equal(7);
        // expect(region.projectValue(10)).to.equal(UNMAPPED_REGION);
// )
//         // in-phase)
//         expect(new Coordinate(3,4) == region.projectCoordinate(4, 5))
//         // right-edge)
//         expect(nul).to.equal( region.projectCoordinate(2, 3))
//         // left-edge)
//         expect(nul).to.equal( region.projectCoordinate(3, 4))
//         // right-edge overlap)
//         expect(new Coordinate(1,2) == region.projectCoordinate(1, 3))
//         // right-edge overlap)
//         expect(new Coordinate(3, 4) == region.projectCoordinate(4, 5))
//         // left-edge overlap)
//         expect(new Coordinate(3, 4) == region.projectCoordinate(3, 5))
//         // AB overlap)
//         expect(new Coordinate(1, 4) == region.projectCoordinate(1, 5))
//         // AC overlap)
//         expect(new Coordinate(1,  7) == region.projectCoordinate(1, 9))
// )
//         // test reverse values)
//         expect(0).to.equal( region.unProjectValue(0))
//         expect(1).to.equal( region.unProjectValue(1))
//         expect(2).to.equal( region.unProjectValue(2))
//         expect(4).to.equal( region.unProjectValue(3))
//         expect(5).to.equal( region.unProjectValue(4))
//         expect(6).to.equal( region.unProjectValue(5))
//         expect(8).to.equal( region.unProjectValue(6))
//         expect(9).to.equal( region.unProjectValue(7))

    });
});


describe('Build Sequence Region Function as a Default', () => {
    it('Array region should match', () => {
        let start = 0 ;
        let end = 100 ;
        let name = 'chr1';
        const region = new SequenceRegion(name,start,end);
        expect(region.start).to.equal(start);
        expect(region.end).to.equal(end);
        expect(region.name).to.equal(name);
        expect(region.order).to.equal(0);
        console.log(region.length +' -> ' + (end-start) );
        expect(region.length).to.equal(end - start );
        expect(region.regions.length).to.equal(1);
        expect(region.regions.length).to.equal(1);


        // let minRegion = region.minMap.find(start).value;
        // let maxRegion = region.maxMap.find(end).value;
        let minRegion = region.find(start);
        let maxRegion = region.find(end);
        // expect(minRegion.second).to.equal(maxRegion.second);
        // expect(minRegion.second.start).to.equal(start);
        // expect(minRegion.second.end).to.equal(end);
        // expect(minRegion.second.startLabel).to.equal(maxRegion.second.startLabel);
        // expect(minRegion.second.endLabel).to.equal(maxRegion.second.endLabel);
    });
});

// describe('Test floor / ceiling methods', function () {
//     it('we should be able to add count for a simple map',function () {
//         let minMap:TreeMap<number,VisibleRegion> = new TreeMap<number,VisibleRegion>();
//         let region1:VisibleRegion = new VisibleRegion(3,4);
//         let region2:VisibleRegion = new VisibleRegion(7,9);
//         minMap.push(new Pair<number,VisibleRegion>(3,region1));
//         minMap.push(new Pair<number,VisibleRegion>(7,region2));
//
//         expect(minMap.size(),'should have 2').to.eq(2);
//
//         console.log('floor key 4: '+ minMap.lower_bound(4).first);
//         console.log('floor ceiling 4: '+ minMap.upper_bound(4).first);
//
//         let iter = minMap.begin();
//         console.log(iter.next().first);
//         console.log(iter.next().first);
//
//         expect(minMap.lower_bound(4).first,'to have the proper lower bound').to.eq(3);
//         expect(minMap.upper_bound(5).first,'to have the proper upper bound').to.eq(7);
//     });
// });

