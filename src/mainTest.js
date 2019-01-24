import React from 'react';
import {
  render,
  Artboard,
  Text,
  View,
  Image,
  makeSymbol,
} from 'react-sketchapp';

const BadgePri = () => (
  <View
    name="Badge primary"
    style={{ width: 26, height: 16, backgroundColor: '#0052CC', borderRadius: 50 }}
  >
    <Text 
    style={{
      color: '#fff',
      fontSize: 16, 
      fontFamily:'SF UI Text', 
      fontWeight: 600, 
      lineHeight: 16, 
      textAlign: 'auto', 
      alignSelf: 'center'}}
    name="Num">12</Text>
  </View>
);

const BadgeSec = () => (
    <View
      name="Badge primary"
      style={{ width: 26, height: 16, backgroundColor: 'red', borderRadius: 50 }}
    >
      <Text 
      style={{
        color: '#fff',
        fontSize: 16, 
        fontFamily:'SF UI Text', 
        fontWeight: 600, 
        lineHeight: 16, 
        textAlign: 'auto', 
        alignSelf: 'center'}}
      name="Num">12</Text>
    </View>
  );

const BadgePrimary = makeSymbol(BadgePri, 'badge/primary');
const BadgeSecondary = makeSymbol(BadgeSec, 'badge/secondary');


const Nested = () => (
  <View name="Nested" style={{ display: 'flex', flexDirection: 'column', width: 26, height: 16 }}>
    <BadgePrimary
      name="Badge primary"
    />
    <BadgeSecondary
      name="Badge secondary"
    />
  </View>
);

const NestedSym = makeSymbol(Nested);

export default () => {
  const Document = () => (
    <Artboard name="Badge" style={{ display: 'flex' }}>
      <NestedSym
        name="Badge"
        // overrides={{
        //   'Red Square Instance': BadgePri,
        //   'Blue Square Text': 'TESTING'
        // }}
      />
    </Artboard>
  );

  render(<Document />, context.document.currentPage());
};