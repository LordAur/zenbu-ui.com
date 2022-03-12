import { Table } from '@zenbu-ui/table'
import { Text } from '@zenbu-ui/typography'
import { Example } from '../../../example/example'

const cols = [{
  header: (<Text componentName="table-column">Prop</Text>),
  accessor: "prop",
  position: "left"
},{
  header: (<Text componentName="table-column">Value</Text>),
  accessor: "value",
  position: "left"
},
{
  header: (<Text componentName="table-column">CSS</Text>),
  accessor: "css",
  position: "left"
}]

export const Padding = () => {
  const rows = [{
    prop: <Text componentName="standard">pt</Text>,
    value: <Text componentName="standard">0</Text>,
    css: <Text componentName="standard">padding-top: 0px;</Text>,
  }, {
    prop: <Text componentName="standard">pt</Text>,
    value: <Text componentName="standard">0.5</Text>,
    css: <Text componentName="standard">padding-top: 0.125rem; /* 2px */</Text>,
  }, {
    prop: <Text componentName="standard">pt</Text>,
    value: <Text componentName="standard">1</Text>,
    css: <Text componentName="standard">padding-top: 0.25rem; /* 4px */</Text>,
  }, {
    prop: <Text componentName="standard">pt</Text>,
    value: <Text componentName="standard">1.5</Text>,
    css: <Text componentName="standard">padding-top: 0.375rem; /* 6px */</Text>,
  }, {
    prop: <Text componentName="standard">pt</Text>,
    value: <Text componentName="standard">2</Text>,
    css: <Text componentName="standard">padding-top: 0.5rem; /* 8px */</Text>,
  }, {
    prop: <Text componentName="standard">pt</Text>,
    value: <Text componentName="standard">2.5</Text>,
    css: <Text componentName="standard">padding-top: 0.625rem; /* 10px */</Text>,
  }, {
    prop: <Text componentName="standard">pt</Text>,
    value: <Text componentName="standard">3</Text>,
    css: <Text componentName="standard">padding-top: 0.75rem; /* 12px */</Text>,
  }, {
    prop: <Text componentName="standard">pt</Text>,
    value: <Text componentName="standard">3.5</Text>,
    css: <Text componentName="standard">padding-top: 0.875rem; /* 14px */</Text>,
  }, {
    prop: <Text componentName="standard">pt</Text>,
    value: <Text componentName="standard">4</Text>,
    css: <Text componentName="standard">padding-top: 1rem; /* 16px */</Text>,
  }, {
    prop: <Text componentName="standard">pt</Text>,
    value: <Text componentName="standard">5</Text>,
    css: <Text componentName="standard">padding-top: 1.25rem; /* 20px */</Text>,
  }, {
    prop: <Text componentName="standard">pt</Text>,
    value: <Text componentName="standard">6</Text>,
    css: <Text componentName="standard">padding-top: 1.5rem; /* 24px */</Text>,
  }, {
    prop: <Text componentName="standard">pt</Text>,
    value: <Text componentName="standard">7</Text>,
    css: <Text componentName="standard">padding-top: 1.75rem; /* 28px */</Text>,
  }, {
    prop: <Text componentName="standard">pt</Text>,
    value: <Text componentName="standard">8</Text>,
    css: <Text componentName="standard">padding-top: 2rem; /* 32px */</Text>,
  }, {
    prop: <Text componentName="standard">pt</Text>,
    value: <Text componentName="standard">9</Text>,
    css: <Text componentName="standard">padding-top: 2.25rem; /* 36px */</Text>,
  }, {
    prop: <Text componentName="standard">pt</Text>,
    value: <Text componentName="standard">10</Text>,
    css: <Text componentName="standard">padding-top: 2.5rem; /* 40px */</Text>,
  }, {
    prop: <Text componentName="standard">pt</Text>,
    value: <Text componentName="standard">11</Text>,
    css: <Text componentName="standard">padding-top: 2.75rem; /* 44px */</Text>,
  }, {
    prop: <Text componentName="standard">pt</Text>,
    value: <Text componentName="standard">12</Text>,
    css: <Text componentName="standard">padding-top: 3rem; /* 48px */</Text>,
  }, {
    prop: <Text componentName="standard">pt</Text>,
    value: <Text componentName="standard">14</Text>,
    css: <Text componentName="standard">padding-top: 3.5rem; /* 56px */</Text>,
  }, {
    prop: <Text componentName="standard">pt</Text>,
    value: <Text componentName="standard">16</Text>,
    css: <Text componentName="standard">padding-top: 4rem; /* 64px */</Text>,
  }, {
    prop: <Text componentName="standard">pt</Text>,
    value: <Text componentName="standard">20</Text>,
    css: <Text componentName="standard">padding-top: 5rem; /* 80px */</Text>,
  }, {
    prop: <Text componentName="standard">pt</Text>,
    value: <Text componentName="standard">24</Text>,
    css: <Text componentName="standard">padding-top: 6rem; /* 96px */</Text>,
  }, {
    prop: <Text componentName="standard">pt</Text>,
    value: <Text componentName="standard">28</Text>,
    css: <Text componentName="standard">padding-top: 7rem; /* 112px */</Text>,
  }, {
    prop: <Text componentName="standard">pt</Text>,
    value: <Text componentName="standard">32</Text>,
    css: <Text componentName="standard">padding-top: 8rem; /* 128px */</Text>,
  }, {
    prop: <Text componentName="standard">pt</Text>,
    value: <Text componentName="standard">36</Text>,
    css: <Text componentName="standard">padding-top: 9rem; /* 144px */</Text>,
  }, {
    prop: <Text componentName="standard">pt</Text>,
    value: <Text componentName="standard">40</Text>,
    css: <Text componentName="standard">padding-top: 10rem; /* 160px */</Text>,
  }, {
    prop: <Text componentName="standard">pt</Text>,
    value: <Text componentName="standard">44</Text>,
    css: <Text componentName="standard">padding-top: 11rem; /* 176px */</Text>,
  }, {
    prop: <Text componentName="standard">pt</Text>,
    value: <Text componentName="standard">48</Text>,
    css: <Text componentName="standard">padding-top: 12rem; /* 192px */</Text>,
  }, {
    prop: <Text componentName="standard">pt</Text>,
    value: <Text componentName="standard">52</Text>,
    css: <Text componentName="standard">padding-top: 13rem; /* 208px */</Text>,
  }, {
    prop: <Text componentName="standard">pt</Text>,
    value: <Text componentName="standard">56</Text>,
    css: <Text componentName="standard">padding-top: 14rem; /* 224px */</Text>,
  }, {
    prop: <Text componentName="standard">pt</Text>,
    value: <Text componentName="standard">60</Text>,
    css: <Text componentName="standard">padding-top: 15rem; /* 240px */</Text>,
  }, {
    prop: <Text componentName="standard">pt</Text>,
    value: <Text componentName="standard">64</Text>,
    css: <Text componentName="standard">padding-top: 16rem; /* 256px */</Text>,
  }, {
    prop: <Text componentName="standard">pt</Text>,
    value: <Text componentName="standard">72</Text>,
    css: <Text componentName="standard">padding-top: 18rem; /* 288px */</Text>,
  }, {
    prop: <Text componentName="standard">pt</Text>,
    value: <Text componentName="standard">80</Text>,
    css: <Text componentName="standard">padding-top: 20rem; /* 320px */</Text>,
  }, {
    prop: <Text componentName="standard">pt</Text>,
    value: <Text componentName="standard">96</Text>,
    css: <Text componentName="standard">padding-top: 24rem; /* 384px */</Text>,
  }, {
    prop: <Text componentName="standard">pr</Text>,
    value: <Text componentName="standard">0</Text>,
    css: <Text componentName="standard">padding-right: 0px;</Text>,
  }, {
    prop: <Text componentName="standard">pr</Text>,
    value: <Text componentName="standard">0.5</Text>,
    css: <Text componentName="standard">padding-right: 0.125rem; /* 2px */</Text>,
  }, {
    prop: <Text componentName="standard">pr</Text>,
    value: <Text componentName="standard">1</Text>,
    css: <Text componentName="standard">padding-right: 0.25rem; /* 4px */</Text>,
  }, {
    prop: <Text componentName="standard">pr</Text>,
    value: <Text componentName="standard">1.5</Text>,
    css: <Text componentName="standard">padding-right: 0.375rem; /* 6px */</Text>,
  }, {
    prop: <Text componentName="standard">pr</Text>,
    value: <Text componentName="standard">2</Text>,
    css: <Text componentName="standard">padding-right: 0.5rem; /* 8px */</Text>,
  }, {
    prop: <Text componentName="standard">pr</Text>,
    value: <Text componentName="standard">2.5</Text>,
    css: <Text componentName="standard">padding-right: 0.625rem; /* 10px */</Text>,
  }, {
    prop: <Text componentName="standard">pr</Text>,
    value: <Text componentName="standard">3</Text>,
    css: <Text componentName="standard">padding-right: 0.75rem; /* 12px */</Text>,
  }, {
    prop: <Text componentName="standard">pr</Text>,
    value: <Text componentName="standard">3.5</Text>,
    css: <Text componentName="standard">padding-right: 0.875rem; /* 14px */</Text>,
  }, {
    prop: <Text componentName="standard">pr</Text>,
    value: <Text componentName="standard">4</Text>,
    css: <Text componentName="standard">padding-right: 1rem; /* 16px */</Text>,
  }, {
    prop: <Text componentName="standard">pr</Text>,
    value: <Text componentName="standard">5</Text>,
    css: <Text componentName="standard">padding-right: 1.25rem; /* 20px */</Text>,
  }, {
    prop: <Text componentName="standard">pr</Text>,
    value: <Text componentName="standard">6</Text>,
    css: <Text componentName="standard">padding-right: 1.5rem; /* 24px */</Text>,
  }, {
    prop: <Text componentName="standard">pr</Text>,
    value: <Text componentName="standard">7</Text>,
    css: <Text componentName="standard">padding-right: 1.75rem; /* 28px */</Text>,
  }, {
    prop: <Text componentName="standard">pr</Text>,
    value: <Text componentName="standard">8</Text>,
    css: <Text componentName="standard">padding-right: 2rem; /* 32px */</Text>,
  }, {
    prop: <Text componentName="standard">pr</Text>,
    value: <Text componentName="standard">9</Text>,
    css: <Text componentName="standard">padding-right: 2.25rem; /* 36px */</Text>,
  }, {
    prop: <Text componentName="standard">pr</Text>,
    value: <Text componentName="standard">10</Text>,
    css: <Text componentName="standard">padding-right: 2.5rem; /* 40px */</Text>,
  }, {
    prop: <Text componentName="standard">pr</Text>,
    value: <Text componentName="standard">11</Text>,
    css: <Text componentName="standard">padding-right: 2.75rem; /* 44px */</Text>,
  }, {
    prop: <Text componentName="standard">pr</Text>,
    value: <Text componentName="standard">12</Text>,
    css: <Text componentName="standard">padding-right: 3rem; /* 48px */</Text>,
  }, {
    prop: <Text componentName="standard">pr</Text>,
    value: <Text componentName="standard">14</Text>,
    css: <Text componentName="standard">padding-right: 3.5rem; /* 56px */</Text>,
  }, {
    prop: <Text componentName="standard">pr</Text>,
    value: <Text componentName="standard">16</Text>,
    css: <Text componentName="standard">padding-right: 4rem; /* 64px */</Text>,
  }, {
    prop: <Text componentName="standard">pr</Text>,
    value: <Text componentName="standard">20</Text>,
    css: <Text componentName="standard">padding-right: 5rem; /* 80px */</Text>,
  }, {
    prop: <Text componentName="standard">pr</Text>,
    value: <Text componentName="standard">24</Text>,
    css: <Text componentName="standard">padding-right: 6rem; /* 96px */</Text>,
  }, {
    prop: <Text componentName="standard">pr</Text>,
    value: <Text componentName="standard">28</Text>,
    css: <Text componentName="standard">padding-right: 7rem; /* 112px */</Text>,
  }, {
    prop: <Text componentName="standard">pr</Text>,
    value: <Text componentName="standard">32</Text>,
    css: <Text componentName="standard">padding-right: 8rem; /* 128px */</Text>,
  }, {
    prop: <Text componentName="standard">pr</Text>,
    value: <Text componentName="standard">36</Text>,
    css: <Text componentName="standard">padding-right: 9rem; /* 144px */</Text>,
  }, {
    prop: <Text componentName="standard">pr</Text>,
    value: <Text componentName="standard">40</Text>,
    css: <Text componentName="standard">padding-right: 10rem; /* 160px */</Text>,
  }, {
    prop: <Text componentName="standard">pr</Text>,
    value: <Text componentName="standard">44</Text>,
    css: <Text componentName="standard">padding-right: 11rem; /* 176px */</Text>,
  }, {
    prop: <Text componentName="standard">pr</Text>,
    value: <Text componentName="standard">48</Text>,
    css: <Text componentName="standard">padding-right: 12rem; /* 192px */</Text>,
  }, {
    prop: <Text componentName="standard">pr</Text>,
    value: <Text componentName="standard">52</Text>,
    css: <Text componentName="standard">padding-right: 13rem; /* 208px */</Text>,
  }, {
    prop: <Text componentName="standard">pr</Text>,
    value: <Text componentName="standard">56</Text>,
    css: <Text componentName="standard">padding-right: 14rem; /* 224px */</Text>,
  }, {
    prop: <Text componentName="standard">pr</Text>,
    value: <Text componentName="standard">60</Text>,
    css: <Text componentName="standard">padding-right: 15rem; /* 240px */</Text>,
  }, {
    prop: <Text componentName="standard">pr</Text>,
    value: <Text componentName="standard">64</Text>,
    css: <Text componentName="standard">padding-right: 16rem; /* 256px */</Text>,
  }, {
    prop: <Text componentName="standard">pr</Text>,
    value: <Text componentName="standard">72</Text>,
    css: <Text componentName="standard">padding-right: 18rem; /* 288px */</Text>,
  }, {
    prop: <Text componentName="standard">pr</Text>,
    value: <Text componentName="standard">80</Text>,
    css: <Text componentName="standard">padding-right: 20rem; /* 320px */</Text>,
  }, {
    prop: <Text componentName="standard">pr</Text>,
    value: <Text componentName="standard">96</Text>,
    css: <Text componentName="standard">padding-right: 24rem; /* 384px */</Text>,
  }, {
    prop: <Text componentName="standard">pb</Text>,
    value: <Text componentName="standard">0</Text>,
    css: <Text componentName="standard">padding-bottom: 0px;</Text>,
  }, {
    prop: <Text componentName="standard">pb</Text>,
    value: <Text componentName="standard">0.5</Text>,
    css: <Text componentName="standard">padding-bottom: 0.125rem; /* 2px */</Text>,
  }, {
    prop: <Text componentName="standard">pb</Text>,
    value: <Text componentName="standard">1</Text>,
    css: <Text componentName="standard">padding-bottom: 0.25rem; /* 4px */</Text>,
  }, {
    prop: <Text componentName="standard">pb</Text>,
    value: <Text componentName="standard">1.5</Text>,
    css: <Text componentName="standard">padding-bottom: 0.375rem; /* 6px */</Text>,
  }, {
    prop: <Text componentName="standard">pb</Text>,
    value: <Text componentName="standard">2</Text>,
    css: <Text componentName="standard">padding-bottom: 0.5rem; /* 8px */</Text>,
  }, {
    prop: <Text componentName="standard">pb</Text>,
    value: <Text componentName="standard">2.5</Text>,
    css: <Text componentName="standard">padding-bottom: 0.625rem; /* 10px */</Text>,
  }, {
    prop: <Text componentName="standard">pb</Text>,
    value: <Text componentName="standard">3</Text>,
    css: <Text componentName="standard">padding-bottom: 0.75rem; /* 12px */</Text>,
  }, {
    prop: <Text componentName="standard">pb</Text>,
    value: <Text componentName="standard">3.5</Text>,
    css: <Text componentName="standard">padding-bottom: 0.875rem; /* 14px */</Text>,
  }, {
    prop: <Text componentName="standard">pb</Text>,
    value: <Text componentName="standard">4</Text>,
    css: <Text componentName="standard">padding-bottom: 1rem; /* 16px */</Text>,
  }, {
    prop: <Text componentName="standard">pb</Text>,
    value: <Text componentName="standard">5</Text>,
    css: <Text componentName="standard">padding-bottom: 1.25rem; /* 20px */</Text>,
  }, {
    prop: <Text componentName="standard">pb</Text>,
    value: <Text componentName="standard">6</Text>,
    css: <Text componentName="standard">padding-bottom: 1.5rem; /* 24px */</Text>,
  }, {
    prop: <Text componentName="standard">pb</Text>,
    value: <Text componentName="standard">7</Text>,
    css: <Text componentName="standard">padding-bottom: 1.75rem; /* 28px */</Text>,
  }, {
    prop: <Text componentName="standard">pb</Text>,
    value: <Text componentName="standard">8</Text>,
    css: <Text componentName="standard">padding-bottom: 2rem; /* 32px */</Text>,
  }, {
    prop: <Text componentName="standard">pb</Text>,
    value: <Text componentName="standard">9</Text>,
    css: <Text componentName="standard">padding-bottom: 2.25rem; /* 36px */</Text>,
  }, {
    prop: <Text componentName="standard">pb</Text>,
    value: <Text componentName="standard">10</Text>,
    css: <Text componentName="standard">padding-bottom: 2.5rem; /* 40px */</Text>,
  }, {
    prop: <Text componentName="standard">pb</Text>,
    value: <Text componentName="standard">11</Text>,
    css: <Text componentName="standard">padding-bottom: 2.75rem; /* 44px */</Text>,
  }, {
    prop: <Text componentName="standard">pb</Text>,
    value: <Text componentName="standard">12</Text>,
    css: <Text componentName="standard">padding-bottom: 3rem; /* 48px */</Text>,
  }, {
    prop: <Text componentName="standard">pb</Text>,
    value: <Text componentName="standard">14</Text>,
    css: <Text componentName="standard">padding-bottom: 3.5rem; /* 56px */</Text>,
  }, {
    prop: <Text componentName="standard">pb</Text>,
    value: <Text componentName="standard">16</Text>,
    css: <Text componentName="standard">padding-bottom: 4rem; /* 64px */</Text>,
  }, {
    prop: <Text componentName="standard">pb</Text>,
    value: <Text componentName="standard">20</Text>,
    css: <Text componentName="standard">padding-bottom: 5rem; /* 80px */</Text>,
  }, {
    prop: <Text componentName="standard">pb</Text>,
    value: <Text componentName="standard">24</Text>,
    css: <Text componentName="standard">padding-bottom: 6rem; /* 96px */</Text>,
  }, {
    prop: <Text componentName="standard">pb</Text>,
    value: <Text componentName="standard">28</Text>,
    css: <Text componentName="standard">padding-bottom: 7rem; /* 112px */</Text>,
  }, {
    prop: <Text componentName="standard">pb</Text>,
    value: <Text componentName="standard">32</Text>,
    css: <Text componentName="standard">padding-bottom: 8rem; /* 128px */</Text>,
  }, {
    prop: <Text componentName="standard">pb</Text>,
    value: <Text componentName="standard">36</Text>,
    css: <Text componentName="standard">padding-bottom: 9rem; /* 144px */</Text>,
  }, {
    prop: <Text componentName="standard">pb</Text>,
    value: <Text componentName="standard">40</Text>,
    css: <Text componentName="standard">padding-bottom: 10rem; /* 160px */</Text>,
  }, {
    prop: <Text componentName="standard">pb</Text>,
    value: <Text componentName="standard">44</Text>,
    css: <Text componentName="standard">padding-bottom: 11rem; /* 176px */</Text>,
  }, {
    prop: <Text componentName="standard">pb</Text>,
    value: <Text componentName="standard">48</Text>,
    css: <Text componentName="standard">padding-bottom: 12rem; /* 192px */</Text>,
  }, {
    prop: <Text componentName="standard">pb</Text>,
    value: <Text componentName="standard">52</Text>,
    css: <Text componentName="standard">padding-bottom: 13rem; /* 208px */</Text>,
  }, {
    prop: <Text componentName="standard">pb</Text>,
    value: <Text componentName="standard">56</Text>,
    css: <Text componentName="standard">padding-bottom: 14rem; /* 224px */</Text>,
  }, {
    prop: <Text componentName="standard">pb</Text>,
    value: <Text componentName="standard">60</Text>,
    css: <Text componentName="standard">padding-bottom: 15rem; /* 240px */</Text>,
  }, {
    prop: <Text componentName="standard">pb</Text>,
    value: <Text componentName="standard">64</Text>,
    css: <Text componentName="standard">padding-bottom: 16rem; /* 256px */</Text>,
  }, {
    prop: <Text componentName="standard">pb</Text>,
    value: <Text componentName="standard">72</Text>,
    css: <Text componentName="standard">padding-bottom: 18rem; /* 288px */</Text>,
  }, {
    prop: <Text componentName="standard">pb</Text>,
    value: <Text componentName="standard">80</Text>,
    css: <Text componentName="standard">padding-bottom: 20rem; /* 320px */</Text>,
  }, {
    prop: <Text componentName="standard">pb</Text>,
    value: <Text componentName="standard">96</Text>,
    css: <Text componentName="standard">padding-bottom: 24rem; /* 384px */</Text>,
  }, {
    prop: <Text componentName="standard">pl</Text>,
    value: <Text componentName="standard">0</Text>,
    css: <Text componentName="standard">padding-left: 0px;</Text>,
  }, {
    prop: <Text componentName="standard">pl</Text>,
    value: <Text componentName="standard">0.5</Text>,
    css: <Text componentName="standard">padding-left: 0.125rem; /* 2px */</Text>,
  }, {
    prop: <Text componentName="standard">pl</Text>,
    value: <Text componentName="standard">1</Text>,
    css: <Text componentName="standard">padding-left: 0.25rem; /* 4px */</Text>,
  }, {
    prop: <Text componentName="standard">pl</Text>,
    value: <Text componentName="standard">1.5</Text>,
    css: <Text componentName="standard">padding-left: 0.375rem; /* 6px */</Text>,
  }, {
    prop: <Text componentName="standard">pl</Text>,
    value: <Text componentName="standard">2</Text>,
    css: <Text componentName="standard">padding-left: 0.5rem; /* 8px */</Text>,
  }, {
    prop: <Text componentName="standard">pl</Text>,
    value: <Text componentName="standard">2.5</Text>,
    css: <Text componentName="standard">padding-left: 0.625rem; /* 10px */</Text>,
  }, {
    prop: <Text componentName="standard">pl</Text>,
    value: <Text componentName="standard">3</Text>,
    css: <Text componentName="standard">padding-left: 0.75rem; /* 12px */</Text>,
  }, {
    prop: <Text componentName="standard">pl</Text>,
    value: <Text componentName="standard">3.5</Text>,
    css: <Text componentName="standard">padding-left: 0.875rem; /* 14px */</Text>,
  }, {
    prop: <Text componentName="standard">pl</Text>,
    value: <Text componentName="standard">4</Text>,
    css: <Text componentName="standard">padding-left: 1rem; /* 16px */</Text>,
  }, {
    prop: <Text componentName="standard">pl</Text>,
    value: <Text componentName="standard">5</Text>,
    css: <Text componentName="standard">padding-left: 1.25rem; /* 20px */</Text>,
  }, {
    prop: <Text componentName="standard">pl</Text>,
    value: <Text componentName="standard">6</Text>,
    css: <Text componentName="standard">padding-left: 1.5rem; /* 24px */</Text>,
  }, {
    prop: <Text componentName="standard">pl</Text>,
    value: <Text componentName="standard">7</Text>,
    css: <Text componentName="standard">padding-left: 1.75rem; /* 28px */</Text>,
  }, {
    prop: <Text componentName="standard">pl</Text>,
    value: <Text componentName="standard">8</Text>,
    css: <Text componentName="standard">padding-left: 2rem; /* 32px */</Text>,
  }, {
    prop: <Text componentName="standard">pl</Text>,
    value: <Text componentName="standard">9</Text>,
    css: <Text componentName="standard">padding-left: 2.25rem; /* 36px */</Text>,
  }, {
    prop: <Text componentName="standard">pl</Text>,
    value: <Text componentName="standard">10</Text>,
    css: <Text componentName="standard">padding-left: 2.5rem; /* 40px */</Text>,
  }, {
    prop: <Text componentName="standard">pl</Text>,
    value: <Text componentName="standard">11</Text>,
    css: <Text componentName="standard">padding-left: 2.75rem; /* 44px */</Text>,
  }, {
    prop: <Text componentName="standard">pl</Text>,
    value: <Text componentName="standard">12</Text>,
    css: <Text componentName="standard">padding-left: 3rem; /* 48px */</Text>,
  }, {
    prop: <Text componentName="standard">pl</Text>,
    value: <Text componentName="standard">14</Text>,
    css: <Text componentName="standard">padding-left: 3.5rem; /* 56px */</Text>,
  }, {
    prop: <Text componentName="standard">pl</Text>,
    value: <Text componentName="standard">16</Text>,
    css: <Text componentName="standard">padding-left: 4rem; /* 64px */</Text>,
  }, {
    prop: <Text componentName="standard">pl</Text>,
    value: <Text componentName="standard">20</Text>,
    css: <Text componentName="standard">padding-left: 5rem; /* 80px */</Text>,
  }, {
    prop: <Text componentName="standard">pl</Text>,
    value: <Text componentName="standard">24</Text>,
    css: <Text componentName="standard">padding-left: 6rem; /* 96px */</Text>,
  }, {
    prop: <Text componentName="standard">pl</Text>,
    value: <Text componentName="standard">28</Text>,
    css: <Text componentName="standard">padding-left: 7rem; /* 112px */</Text>,
  }, {
    prop: <Text componentName="standard">pl</Text>,
    value: <Text componentName="standard">32</Text>,
    css: <Text componentName="standard">padding-left: 8rem; /* 128px */</Text>,
  }, {
    prop: <Text componentName="standard">pl</Text>,
    value: <Text componentName="standard">36</Text>,
    css: <Text componentName="standard">padding-left: 9rem; /* 144px */</Text>,
  }, {
    prop: <Text componentName="standard">pl</Text>,
    value: <Text componentName="standard">40</Text>,
    css: <Text componentName="standard">padding-left: 10rem; /* 160px */</Text>,
  }, {
    prop: <Text componentName="standard">pl</Text>,
    value: <Text componentName="standard">44</Text>,
    css: <Text componentName="standard">padding-left: 11rem; /* 176px */</Text>,
  }, {
    prop: <Text componentName="standard">pl</Text>,
    value: <Text componentName="standard">48</Text>,
    css: <Text componentName="standard">padding-left: 12rem; /* 192px */</Text>,
  }, {
    prop: <Text componentName="standard">pl</Text>,
    value: <Text componentName="standard">52</Text>,
    css: <Text componentName="standard">padding-left: 13rem; /* 208px */</Text>,
  }, {
    prop: <Text componentName="standard">pl</Text>,
    value: <Text componentName="standard">56</Text>,
    css: <Text componentName="standard">padding-left: 14rem; /* 224px */</Text>,
  }, {
    prop: <Text componentName="standard">pl</Text>,
    value: <Text componentName="standard">60</Text>,
    css: <Text componentName="standard">padding-left: 15rem; /* 240px */</Text>,
  }, {
    prop: <Text componentName="standard">pl</Text>,
    value: <Text componentName="standard">64</Text>,
    css: <Text componentName="standard">padding-left: 16rem; /* 256px */</Text>,
  }, {
    prop: <Text componentName="standard">pl</Text>,
    value: <Text componentName="standard">72</Text>,
    css: <Text componentName="standard">padding-left: 18rem; /* 288px */</Text>,
  }, {
    prop: <Text componentName="standard">pl</Text>,
    value: <Text componentName="standard">80</Text>,
    css: <Text componentName="standard">padding-left: 20rem; /* 320px */</Text>,
  }, {
    prop: <Text componentName="standard">pl</Text>,
    value: <Text componentName="standard">96</Text>,
    css: <Text componentName="standard">padding-left: 24rem; /* 384px */</Text>,
  }]

  return(
    <Table columns={cols} rows={rows} my="6"
    colColor="slate" colColorContrast="50"
    darkColColor="slate" darkColColorContrast="700"
    scroll scrollHeight={350} />
  )
}

export const PaddingExample = () => {
  return(
    <Example py={5}>
      <div className="flex flex-wrap items-start justify-center font-mono text-white text-sm font-bold leading-6 -mx-5">
        <div className="flex items-start">
          <div className="flex-none px-5">
            <div className="bg-blue-500 shadow-lg rounded-lg overflow-hidden">
              <div className="h-6 bg-stripes-white rounded-t-lg" />
              <div className="px-2">pt=6</div>
            </div>
          </div>
          <div className="flex-none px-5 pt-6">
            <div className="flex bg-blue-500 shadow-lg rounded-lg overflow-hidden">
              <div className="flex-none px-2">pr=4</div>
              <div className="flex-none w-4 bg-stripes-white" />
            </div>
          </div>
        </div>
        <div className="flex items-start">
          <div className="flex-none px-5 pt-6">
            <div className="bg-blue-500 shadow-lg rounded-lg overflow-hidden">
              <div className="px-2">pb=8</div>
              <div className="h-8 bg-stripes-white" />
            </div>
          </div>
          <div className="flex-none flex px-5 pt-6">
            <div className="flex bg-blue-500 shadow-lg rounded-lg overflow-hidden">
              <div className="flex-none w-2 bg-stripes-white" />
              <div className="flex-none px-2">pl=2</div>
            </div>
          </div>
        </div>
      </div>
    </Example>
  )
}

export const PaddingHorizontalExample = () => {
  return(
    <Example py={5}>
      <div className="bg-indigo-500 rounded-lg shadow-lg overflow-hidden flex">
        <div className="w-8 bg-stripes-white" />
        <div className="px-4 text-white">px=8</div>
        <div className="w-8 bg-stripes-white" />
      </div>
    </Example>
  )
}

export const PaddingVerticalExample = () => {
  return(
    <Example py={5}>
      <div className="bg-pink-500 rounded-lg shadow-lg overflow-hidden">
        <div className="h-8 bg-stripes-white" />
        <div className="px-4 text-white">py=8</div>
        <div className="h-8 bg-stripes-white" />
      </div>
    </Example>
  )
}

export const Margin = () => {
  const rows = [{
    prop: <Text componentName="standard">mt</Text>,
    value: <Text componentName="standard">0</Text>,
    css: <Text componentName="standard">margin-top: 0px;</Text>,
  }, {
    prop: <Text componentName="standard">mt</Text>,
    value: <Text componentName="standard">0.5</Text>,
    css: <Text componentName="standard">margin-top: 0.125rem; /* 2px */</Text>,
  }, {
    prop: <Text componentName="standard">mt</Text>,
    value: <Text componentName="standard">1</Text>,
    css: <Text componentName="standard">margin-top: 0.25rem; /* 4px */</Text>,
  }, {
    prop: <Text componentName="standard">mt</Text>,
    value: <Text componentName="standard">1.5</Text>,
    css: <Text componentName="standard">margin-top: 0.375rem; /* 6px */</Text>,
  }, {
    prop: <Text componentName="standard">mt</Text>,
    value: <Text componentName="standard">2</Text>,
    css: <Text componentName="standard">margin-top: 0.5rem; /* 8px */</Text>,
  }, {
    prop: <Text componentName="standard">mt</Text>,
    value: <Text componentName="standard">2.5</Text>,
    css: <Text componentName="standard">margin-top: 0.625rem; /* 10px */</Text>,
  }, {
    prop: <Text componentName="standard">mt</Text>,
    value: <Text componentName="standard">3</Text>,
    css: <Text componentName="standard">margin-top: 0.75rem; /* 12px */</Text>,
  }, {
    prop: <Text componentName="standard">mt</Text>,
    value: <Text componentName="standard">3.5</Text>,
    css: <Text componentName="standard">margin-top: 0.875rem; /* 14px */</Text>,
  }, {
    prop: <Text componentName="standard">mt</Text>,
    value: <Text componentName="standard">4</Text>,
    css: <Text componentName="standard">margin-top: 1rem; /* 16px */</Text>,
  }, {
    prop: <Text componentName="standard">mt</Text>,
    value: <Text componentName="standard">5</Text>,
    css: <Text componentName="standard">margin-top: 1.25rem; /* 20px */</Text>,
  }, {
    prop: <Text componentName="standard">mt</Text>,
    value: <Text componentName="standard">6</Text>,
    css: <Text componentName="standard">margin-top: 1.5rem; /* 24px */</Text>,
  }, {
    prop: <Text componentName="standard">mt</Text>,
    value: <Text componentName="standard">7</Text>,
    css: <Text componentName="standard">margin-top: 1.75rem; /* 28px */</Text>,
  }, {
    prop: <Text componentName="standard">mt</Text>,
    value: <Text componentName="standard">8</Text>,
    css: <Text componentName="standard">margin-top: 2rem; /* 32px */</Text>,
  }, {
    prop: <Text componentName="standard">mt</Text>,
    value: <Text componentName="standard">9</Text>,
    css: <Text componentName="standard">margin-top: 2.25rem; /* 36px */</Text>,
  }, {
    prop: <Text componentName="standard">mt</Text>,
    value: <Text componentName="standard">10</Text>,
    css: <Text componentName="standard">margin-top: 2.5rem; /* 40px */</Text>,
  }, {
    prop: <Text componentName="standard">mt</Text>,
    value: <Text componentName="standard">11</Text>,
    css: <Text componentName="standard">margin-top: 2.75rem; /* 44px */</Text>,
  }, {
    prop: <Text componentName="standard">mt</Text>,
    value: <Text componentName="standard">12</Text>,
    css: <Text componentName="standard">margin-top: 3rem; /* 48px */</Text>,
  }, {
    prop: <Text componentName="standard">mt</Text>,
    value: <Text componentName="standard">14</Text>,
    css: <Text componentName="standard">margin-top: 3.5rem; /* 56px */</Text>,
  }, {
    prop: <Text componentName="standard">mt</Text>,
    value: <Text componentName="standard">16</Text>,
    css: <Text componentName="standard">margin-top: 4rem; /* 64px */</Text>,
  }, {
    prop: <Text componentName="standard">mt</Text>,
    value: <Text componentName="standard">20</Text>,
    css: <Text componentName="standard">margin-top: 5rem; /* 80px */</Text>,
  }, {
    prop: <Text componentName="standard">mt</Text>,
    value: <Text componentName="standard">24</Text>,
    css: <Text componentName="standard">margin-top: 6rem; /* 96px */</Text>,
  }, {
    prop: <Text componentName="standard">mt</Text>,
    value: <Text componentName="standard">28</Text>,
    css: <Text componentName="standard">margin-top: 7rem; /* 112px */</Text>,
  }, {
    prop: <Text componentName="standard">mt</Text>,
    value: <Text componentName="standard">32</Text>,
    css: <Text componentName="standard">margin-top: 8rem; /* 128px */</Text>,
  }, {
    prop: <Text componentName="standard">mt</Text>,
    value: <Text componentName="standard">36</Text>,
    css: <Text componentName="standard">margin-top: 9rem; /* 144px */</Text>,
  }, {
    prop: <Text componentName="standard">mt</Text>,
    value: <Text componentName="standard">40</Text>,
    css: <Text componentName="standard">margin-top: 10rem; /* 160px */</Text>,
  }, {
    prop: <Text componentName="standard">mt</Text>,
    value: <Text componentName="standard">44</Text>,
    css: <Text componentName="standard">margin-top: 11rem; /* 176px */</Text>,
  }, {
    prop: <Text componentName="standard">mt</Text>,
    value: <Text componentName="standard">48</Text>,
    css: <Text componentName="standard">margin-top: 12rem; /* 192px */</Text>,
  }, {
    prop: <Text componentName="standard">mt</Text>,
    value: <Text componentName="standard">52</Text>,
    css: <Text componentName="standard">margin-top: 13rem; /* 208px */</Text>,
  }, {
    prop: <Text componentName="standard">mt</Text>,
    value: <Text componentName="standard">56</Text>,
    css: <Text componentName="standard">margin-top: 14rem; /* 224px */</Text>,
  }, {
    prop: <Text componentName="standard">mt</Text>,
    value: <Text componentName="standard">60</Text>,
    css: <Text componentName="standard">margin-top: 15rem; /* 240px */</Text>,
  }, {
    prop: <Text componentName="standard">mt</Text>,
    value: <Text componentName="standard">64</Text>,
    css: <Text componentName="standard">margin-top: 16rem; /* 256px */</Text>,
  }, {
    prop: <Text componentName="standard">mt</Text>,
    value: <Text componentName="standard">72</Text>,
    css: <Text componentName="standard">margin-top: 18rem; /* 288px */</Text>,
  }, {
    prop: <Text componentName="standard">mt</Text>,
    value: <Text componentName="standard">80</Text>,
    css: <Text componentName="standard">margin-top: 20rem; /* 320px */</Text>,
  }, {
    prop: <Text componentName="standard">mt</Text>,
    value: <Text componentName="standard">96</Text>,
    css: <Text componentName="standard">margin-top: 24rem; /* 384px */</Text>,
  }, {
    prop: <Text componentName="standard">mr</Text>,
    value: <Text componentName="standard">0</Text>,
    css: <Text componentName="standard">margin-right: 0px;</Text>,
  }, {
    prop: <Text componentName="standard">mr</Text>,
    value: <Text componentName="standard">0.5</Text>,
    css: <Text componentName="standard">margin-right: 0.125rem; /* 2px */</Text>,
  }, {
    prop: <Text componentName="standard">mr</Text>,
    value: <Text componentName="standard">1</Text>,
    css: <Text componentName="standard">margin-right: 0.25rem; /* 4px */</Text>,
  }, {
    prop: <Text componentName="standard">mr</Text>,
    value: <Text componentName="standard">1.5</Text>,
    css: <Text componentName="standard">margin-right: 0.375rem; /* 6px */</Text>,
  }, {
    prop: <Text componentName="standard">mr</Text>,
    value: <Text componentName="standard">2</Text>,
    css: <Text componentName="standard">margin-right: 0.5rem; /* 8px */</Text>,
  }, {
    prop: <Text componentName="standard">mr</Text>,
    value: <Text componentName="standard">2.5</Text>,
    css: <Text componentName="standard">margin-right: 0.625rem; /* 10px */</Text>,
  }, {
    prop: <Text componentName="standard">mr</Text>,
    value: <Text componentName="standard">3</Text>,
    css: <Text componentName="standard">margin-right: 0.75rem; /* 12px */</Text>,
  }, {
    prop: <Text componentName="standard">mr</Text>,
    value: <Text componentName="standard">3.5</Text>,
    css: <Text componentName="standard">margin-right: 0.875rem; /* 14px */</Text>,
  }, {
    prop: <Text componentName="standard">mr</Text>,
    value: <Text componentName="standard">4</Text>,
    css: <Text componentName="standard">margin-right: 1rem; /* 16px */</Text>,
  }, {
    prop: <Text componentName="standard">mr</Text>,
    value: <Text componentName="standard">5</Text>,
    css: <Text componentName="standard">margin-right: 1.25rem; /* 20px */</Text>,
  }, {
    prop: <Text componentName="standard">mr</Text>,
    value: <Text componentName="standard">6</Text>,
    css: <Text componentName="standard">margin-right: 1.5rem; /* 24px */</Text>,
  }, {
    prop: <Text componentName="standard">mr</Text>,
    value: <Text componentName="standard">7</Text>,
    css: <Text componentName="standard">margin-right: 1.75rem; /* 28px */</Text>,
  }, {
    prop: <Text componentName="standard">mr</Text>,
    value: <Text componentName="standard">8</Text>,
    css: <Text componentName="standard">margin-right: 2rem; /* 32px */</Text>,
  }, {
    prop: <Text componentName="standard">mr</Text>,
    value: <Text componentName="standard">9</Text>,
    css: <Text componentName="standard">margin-right: 2.25rem; /* 36px */</Text>,
  }, {
    prop: <Text componentName="standard">mr</Text>,
    value: <Text componentName="standard">10</Text>,
    css: <Text componentName="standard">margin-right: 2.5rem; /* 40px */</Text>,
  }, {
    prop: <Text componentName="standard">mr</Text>,
    value: <Text componentName="standard">11</Text>,
    css: <Text componentName="standard">margin-right: 2.75rem; /* 44px */</Text>,
  }, {
    prop: <Text componentName="standard">mr</Text>,
    value: <Text componentName="standard">12</Text>,
    css: <Text componentName="standard">margin-right: 3rem; /* 48px */</Text>,
  }, {
    prop: <Text componentName="standard">mr</Text>,
    value: <Text componentName="standard">14</Text>,
    css: <Text componentName="standard">margin-right: 3.5rem; /* 56px */</Text>,
  }, {
    prop: <Text componentName="standard">mr</Text>,
    value: <Text componentName="standard">16</Text>,
    css: <Text componentName="standard">margin-right: 4rem; /* 64px */</Text>,
  }, {
    prop: <Text componentName="standard">mr</Text>,
    value: <Text componentName="standard">20</Text>,
    css: <Text componentName="standard">margin-right: 5rem; /* 80px */</Text>,
  }, {
    prop: <Text componentName="standard">mr</Text>,
    value: <Text componentName="standard">24</Text>,
    css: <Text componentName="standard">margin-right: 6rem; /* 96px */</Text>,
  }, {
    prop: <Text componentName="standard">mr</Text>,
    value: <Text componentName="standard">28</Text>,
    css: <Text componentName="standard">margin-right: 7rem; /* 112px */</Text>,
  }, {
    prop: <Text componentName="standard">mr</Text>,
    value: <Text componentName="standard">32</Text>,
    css: <Text componentName="standard">margin-right: 8rem; /* 128px */</Text>,
  }, {
    prop: <Text componentName="standard">mr</Text>,
    value: <Text componentName="standard">36</Text>,
    css: <Text componentName="standard">margin-right: 9rem; /* 144px */</Text>,
  }, {
    prop: <Text componentName="standard">mr</Text>,
    value: <Text componentName="standard">40</Text>,
    css: <Text componentName="standard">margin-right: 10rem; /* 160px */</Text>,
  }, {
    prop: <Text componentName="standard">mr</Text>,
    value: <Text componentName="standard">44</Text>,
    css: <Text componentName="standard">margin-right: 11rem; /* 176px */</Text>,
  }, {
    prop: <Text componentName="standard">mr</Text>,
    value: <Text componentName="standard">48</Text>,
    css: <Text componentName="standard">margin-right: 12rem; /* 192px */</Text>,
  }, {
    prop: <Text componentName="standard">mr</Text>,
    value: <Text componentName="standard">52</Text>,
    css: <Text componentName="standard">margin-right: 13rem; /* 208px */</Text>,
  }, {
    prop: <Text componentName="standard">mr</Text>,
    value: <Text componentName="standard">56</Text>,
    css: <Text componentName="standard">margin-right: 14rem; /* 224px */</Text>,
  }, {
    prop: <Text componentName="standard">mr</Text>,
    value: <Text componentName="standard">60</Text>,
    css: <Text componentName="standard">margin-right: 15rem; /* 240px */</Text>,
  }, {
    prop: <Text componentName="standard">mr</Text>,
    value: <Text componentName="standard">64</Text>,
    css: <Text componentName="standard">margin-right: 16rem; /* 256px */</Text>,
  }, {
    prop: <Text componentName="standard">mr</Text>,
    value: <Text componentName="standard">72</Text>,
    css: <Text componentName="standard">margin-right: 18rem; /* 288px */</Text>,
  }, {
    prop: <Text componentName="standard">mr</Text>,
    value: <Text componentName="standard">80</Text>,
    css: <Text componentName="standard">margin-right: 20rem; /* 320px */</Text>,
  }, {
    prop: <Text componentName="standard">mr</Text>,
    value: <Text componentName="standard">96</Text>,
    css: <Text componentName="standard">margin-right: 24rem; /* 384px */</Text>,
  }, {
    prop: <Text componentName="standard">mb</Text>,
    value: <Text componentName="standard">0</Text>,
    css: <Text componentName="standard">margin-bottom: 0px;</Text>,
  }, {
    prop: <Text componentName="standard">mb</Text>,
    value: <Text componentName="standard">0.5</Text>,
    css: <Text componentName="standard">margin-bottom: 0.125rem; /* 2px */</Text>,
  }, {
    prop: <Text componentName="standard">mb</Text>,
    value: <Text componentName="standard">1</Text>,
    css: <Text componentName="standard">margin-bottom: 0.25rem; /* 4px */</Text>,
  }, {
    prop: <Text componentName="standard">mb</Text>,
    value: <Text componentName="standard">1.5</Text>,
    css: <Text componentName="standard">margin-bottom: 0.375rem; /* 6px */</Text>,
  }, {
    prop: <Text componentName="standard">mb</Text>,
    value: <Text componentName="standard">2</Text>,
    css: <Text componentName="standard">margin-bottom: 0.5rem; /* 8px */</Text>,
  }, {
    prop: <Text componentName="standard">mb</Text>,
    value: <Text componentName="standard">2.5</Text>,
    css: <Text componentName="standard">margin-bottom: 0.625rem; /* 10px */</Text>,
  }, {
    prop: <Text componentName="standard">mb</Text>,
    value: <Text componentName="standard">3</Text>,
    css: <Text componentName="standard">margin-bottom: 0.75rem; /* 12px */</Text>,
  }, {
    prop: <Text componentName="standard">mb</Text>,
    value: <Text componentName="standard">3.5</Text>,
    css: <Text componentName="standard">margin-bottom: 0.875rem; /* 14px */</Text>,
  }, {
    prop: <Text componentName="standard">mb</Text>,
    value: <Text componentName="standard">4</Text>,
    css: <Text componentName="standard">margin-bottom: 1rem; /* 16px */</Text>,
  }, {
    prop: <Text componentName="standard">mb</Text>,
    value: <Text componentName="standard">5</Text>,
    css: <Text componentName="standard">margin-bottom: 1.25rem; /* 20px */</Text>,
  }, {
    prop: <Text componentName="standard">mb</Text>,
    value: <Text componentName="standard">6</Text>,
    css: <Text componentName="standard">margin-bottom: 1.5rem; /* 24px */</Text>,
  }, {
    prop: <Text componentName="standard">mb</Text>,
    value: <Text componentName="standard">7</Text>,
    css: <Text componentName="standard">margin-bottom: 1.75rem; /* 28px */</Text>,
  }, {
    prop: <Text componentName="standard">mb</Text>,
    value: <Text componentName="standard">8</Text>,
    css: <Text componentName="standard">margin-bottom: 2rem; /* 32px */</Text>,
  }, {
    prop: <Text componentName="standard">mb</Text>,
    value: <Text componentName="standard">9</Text>,
    css: <Text componentName="standard">margin-bottom: 2.25rem; /* 36px */</Text>,
  }, {
    prop: <Text componentName="standard">mb</Text>,
    value: <Text componentName="standard">10</Text>,
    css: <Text componentName="standard">margin-bottom: 2.5rem; /* 40px */</Text>,
  }, {
    prop: <Text componentName="standard">mb</Text>,
    value: <Text componentName="standard">11</Text>,
    css: <Text componentName="standard">margin-bottom: 2.75rem; /* 44px */</Text>,
  }, {
    prop: <Text componentName="standard">mb</Text>,
    value: <Text componentName="standard">12</Text>,
    css: <Text componentName="standard">margin-bottom: 3rem; /* 48px */</Text>,
  }, {
    prop: <Text componentName="standard">mb</Text>,
    value: <Text componentName="standard">14</Text>,
    css: <Text componentName="standard">margin-bottom: 3.5rem; /* 56px */</Text>,
  }, {
    prop: <Text componentName="standard">mb</Text>,
    value: <Text componentName="standard">16</Text>,
    css: <Text componentName="standard">margin-bottom: 4rem; /* 64px */</Text>,
  }, {
    prop: <Text componentName="standard">mb</Text>,
    value: <Text componentName="standard">20</Text>,
    css: <Text componentName="standard">margin-bottom: 5rem; /* 80px */</Text>,
  }, {
    prop: <Text componentName="standard">mb</Text>,
    value: <Text componentName="standard">24</Text>,
    css: <Text componentName="standard">margin-bottom: 6rem; /* 96px */</Text>,
  }, {
    prop: <Text componentName="standard">mb</Text>,
    value: <Text componentName="standard">28</Text>,
    css: <Text componentName="standard">margin-bottom: 7rem; /* 112px */</Text>,
  }, {
    prop: <Text componentName="standard">mb</Text>,
    value: <Text componentName="standard">32</Text>,
    css: <Text componentName="standard">margin-bottom: 8rem; /* 128px */</Text>,
  }, {
    prop: <Text componentName="standard">mb</Text>,
    value: <Text componentName="standard">36</Text>,
    css: <Text componentName="standard">margin-bottom: 9rem; /* 144px */</Text>,
  }, {
    prop: <Text componentName="standard">mb</Text>,
    value: <Text componentName="standard">40</Text>,
    css: <Text componentName="standard">margin-bottom: 10rem; /* 160px */</Text>,
  }, {
    prop: <Text componentName="standard">mb</Text>,
    value: <Text componentName="standard">44</Text>,
    css: <Text componentName="standard">margin-bottom: 11rem; /* 176px */</Text>,
  }, {
    prop: <Text componentName="standard">mb</Text>,
    value: <Text componentName="standard">48</Text>,
    css: <Text componentName="standard">margin-bottom: 12rem; /* 192px */</Text>,
  }, {
    prop: <Text componentName="standard">mb</Text>,
    value: <Text componentName="standard">52</Text>,
    css: <Text componentName="standard">margin-bottom: 13rem; /* 208px */</Text>,
  }, {
    prop: <Text componentName="standard">mb</Text>,
    value: <Text componentName="standard">56</Text>,
    css: <Text componentName="standard">margin-bottom: 14rem; /* 224px */</Text>,
  }, {
    prop: <Text componentName="standard">mb</Text>,
    value: <Text componentName="standard">60</Text>,
    css: <Text componentName="standard">margin-bottom: 15rem; /* 240px */</Text>,
  }, {
    prop: <Text componentName="standard">mb</Text>,
    value: <Text componentName="standard">64</Text>,
    css: <Text componentName="standard">margin-bottom: 16rem; /* 256px */</Text>,
  }, {
    prop: <Text componentName="standard">mb</Text>,
    value: <Text componentName="standard">72</Text>,
    css: <Text componentName="standard">margin-bottom: 18rem; /* 288px */</Text>,
  }, {
    prop: <Text componentName="standard">mb</Text>,
    value: <Text componentName="standard">80</Text>,
    css: <Text componentName="standard">margin-bottom: 20rem; /* 320px */</Text>,
  }, {
    prop: <Text componentName="standard">mb</Text>,
    value: <Text componentName="standard">96</Text>,
    css: <Text componentName="standard">margin-bottom: 24rem; /* 384px */</Text>,
  }, {
    prop: <Text componentName="standard">ml</Text>,
    value: <Text componentName="standard">0</Text>,
    css: <Text componentName="standard">margin-left: 0px;</Text>,
  }, {
    prop: <Text componentName="standard">ml</Text>,
    value: <Text componentName="standard">0.5</Text>,
    css: <Text componentName="standard">margin-left: 0.125rem; /* 2px */</Text>,
  }, {
    prop: <Text componentName="standard">ml</Text>,
    value: <Text componentName="standard">1</Text>,
    css: <Text componentName="standard">margin-left: 0.25rem; /* 4px */</Text>,
  }, {
    prop: <Text componentName="standard">ml</Text>,
    value: <Text componentName="standard">1.5</Text>,
    css: <Text componentName="standard">margin-left: 0.375rem; /* 6px */</Text>,
  }, {
    prop: <Text componentName="standard">ml</Text>,
    value: <Text componentName="standard">2</Text>,
    css: <Text componentName="standard">margin-left: 0.5rem; /* 8px */</Text>,
  }, {
    prop: <Text componentName="standard">ml</Text>,
    value: <Text componentName="standard">2.5</Text>,
    css: <Text componentName="standard">margin-left: 0.625rem; /* 10px */</Text>,
  }, {
    prop: <Text componentName="standard">ml</Text>,
    value: <Text componentName="standard">3</Text>,
    css: <Text componentName="standard">margin-left: 0.75rem; /* 12px */</Text>,
  }, {
    prop: <Text componentName="standard">ml</Text>,
    value: <Text componentName="standard">3.5</Text>,
    css: <Text componentName="standard">margin-left: 0.875rem; /* 14px */</Text>,
  }, {
    prop: <Text componentName="standard">ml</Text>,
    value: <Text componentName="standard">4</Text>,
    css: <Text componentName="standard">margin-left: 1rem; /* 16px */</Text>,
  }, {
    prop: <Text componentName="standard">ml</Text>,
    value: <Text componentName="standard">5</Text>,
    css: <Text componentName="standard">margin-left: 1.25rem; /* 20px */</Text>,
  }, {
    prop: <Text componentName="standard">ml</Text>,
    value: <Text componentName="standard">6</Text>,
    css: <Text componentName="standard">margin-left: 1.5rem; /* 24px */</Text>,
  }, {
    prop: <Text componentName="standard">ml</Text>,
    value: <Text componentName="standard">7</Text>,
    css: <Text componentName="standard">margin-left: 1.75rem; /* 28px */</Text>,
  }, {
    prop: <Text componentName="standard">ml</Text>,
    value: <Text componentName="standard">8</Text>,
    css: <Text componentName="standard">margin-left: 2rem; /* 32px */</Text>,
  }, {
    prop: <Text componentName="standard">ml</Text>,
    value: <Text componentName="standard">9</Text>,
    css: <Text componentName="standard">margin-left: 2.25rem; /* 36px */</Text>,
  }, {
    prop: <Text componentName="standard">ml</Text>,
    value: <Text componentName="standard">10</Text>,
    css: <Text componentName="standard">margin-left: 2.5rem; /* 40px */</Text>,
  }, {
    prop: <Text componentName="standard">ml</Text>,
    value: <Text componentName="standard">11</Text>,
    css: <Text componentName="standard">margin-left: 2.75rem; /* 44px */</Text>,
  }, {
    prop: <Text componentName="standard">ml</Text>,
    value: <Text componentName="standard">12</Text>,
    css: <Text componentName="standard">margin-left: 3rem; /* 48px */</Text>,
  }, {
    prop: <Text componentName="standard">ml</Text>,
    value: <Text componentName="standard">14</Text>,
    css: <Text componentName="standard">margin-left: 3.5rem; /* 56px */</Text>,
  }, {
    prop: <Text componentName="standard">ml</Text>,
    value: <Text componentName="standard">16</Text>,
    css: <Text componentName="standard">margin-left: 4rem; /* 64px */</Text>,
  }, {
    prop: <Text componentName="standard">ml</Text>,
    value: <Text componentName="standard">20</Text>,
    css: <Text componentName="standard">margin-left: 5rem; /* 80px */</Text>,
  }, {
    prop: <Text componentName="standard">ml</Text>,
    value: <Text componentName="standard">24</Text>,
    css: <Text componentName="standard">margin-left: 6rem; /* 96px */</Text>,
  }, {
    prop: <Text componentName="standard">ml</Text>,
    value: <Text componentName="standard">28</Text>,
    css: <Text componentName="standard">margin-left: 7rem; /* 112px */</Text>,
  }, {
    prop: <Text componentName="standard">ml</Text>,
    value: <Text componentName="standard">32</Text>,
    css: <Text componentName="standard">margin-left: 8rem; /* 128px */</Text>,
  }, {
    prop: <Text componentName="standard">ml</Text>,
    value: <Text componentName="standard">36</Text>,
    css: <Text componentName="standard">margin-left: 9rem; /* 144px */</Text>,
  }, {
    prop: <Text componentName="standard">ml</Text>,
    value: <Text componentName="standard">40</Text>,
    css: <Text componentName="standard">margin-left: 10rem; /* 160px */</Text>,
  }, {
    prop: <Text componentName="standard">ml</Text>,
    value: <Text componentName="standard">44</Text>,
    css: <Text componentName="standard">margin-left: 11rem; /* 176px */</Text>,
  }, {
    prop: <Text componentName="standard">ml</Text>,
    value: <Text componentName="standard">48</Text>,
    css: <Text componentName="standard">margin-left: 12rem; /* 192px */</Text>,
  }, {
    prop: <Text componentName="standard">ml</Text>,
    value: <Text componentName="standard">52</Text>,
    css: <Text componentName="standard">margin-left: 13rem; /* 208px */</Text>,
  }, {
    prop: <Text componentName="standard">ml</Text>,
    value: <Text componentName="standard">56</Text>,
    css: <Text componentName="standard">margin-left: 14rem; /* 224px */</Text>,
  }, {
    prop: <Text componentName="standard">ml</Text>,
    value: <Text componentName="standard">60</Text>,
    css: <Text componentName="standard">margin-left: 15rem; /* 240px */</Text>,
  }, {
    prop: <Text componentName="standard">ml</Text>,
    value: <Text componentName="standard">64</Text>,
    css: <Text componentName="standard">margin-left: 16rem; /* 256px */</Text>,
  }, {
    prop: <Text componentName="standard">ml</Text>,
    value: <Text componentName="standard">72</Text>,
    css: <Text componentName="standard">margin-left: 18rem; /* 288px */</Text>,
  }, {
    prop: <Text componentName="standard">ml</Text>,
    value: <Text componentName="standard">80</Text>,
    css: <Text componentName="standard">margin-left: 20rem; /* 320px */</Text>,
  }, {
    prop: <Text componentName="standard">ml</Text>,
    value: <Text componentName="standard">96</Text>,
    css: <Text componentName="standard">margin-left: 24rem; /* 384px */</Text>,
  }]

  return(
    <Table columns={cols} rows={rows} my="6"
    colColor="slate" colColorContrast="50"
    darkColColor="slate" darkColColorContrast="700"
    scroll scrollHeight={350} />
  )
}

export const MarginExample = () => {
  return(
    <Example flex={false} py={0} px={0}>
      <div className="relative font-mono text-white text-sm font-bold leading-6 h-56">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 md:-ml-24">
          <div className="flow-root bg-stripes-purple rounded-b-lg">
            <div className="bg-purple-500 rounded-lg shadow-lg px-4 mt-6">mt=6</div>
          </div>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <div className="flow-root bg-stripes-purple rounded-l-lg">
            <div className="flex-none bg-purple-500 rounded-lg shadow-lg px-4 mr-4">
              mr=4
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 md:ml-24">
          <div className="flow-root bg-stripes-purple rounded-t-lg">
            <div className="bg-purple-500 rounded-lg shadow-lg px-4 mb-8">mb=8</div>
          </div>
        </div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2">
          <div className="flow-root bg-stripes-purple rounded-r-lg">
            <div className="flex-none bg-purple-500 rounded-lg shadow-lg px-4 ml-2">
              ml=2
            </div>
          </div>
        </div>
      </div>
    </Example>
  )
}

export const MarginHorizontalExample = () => {
  return(
    <Example py={5}>
      <div className="bg-indigo-500 rounded-lg shadow-lg overflow-hidden flex">
        <div className="w-8 bg-stripes-white" />
        <div className="px-4 text-white">mx=8</div>
        <div className="w-8 bg-stripes-white" />
      </div>
    </Example>
  )
}

export const MarginVerticalExample = () => {
  return(
    <Example py={5}>
      <div className="bg-pink-500 rounded-lg shadow-lg overflow-hidden">
        <div className="h-8 bg-stripes-white" />
        <div className="px-4 text-white">my=8</div>
        <div className="h-8 bg-stripes-white" />
      </div>
    </Example>
  )
}

export const GapSize = () => {
  const rows = [{
    prop: <Text componentName="standard">gap</Text>,
    value: <Text componentName="standard">0</Text>,
    css: <Text componentName="standard">gap: 0px;</Text>,
  }, {
    prop: <Text componentName="standard">gap</Text>,
    value: <Text componentName="standard">0.5</Text>,
    css: <Text componentName="standard">gap: 0.125rem; /* 2px */</Text>,
  }, {
    prop: <Text componentName="standard">gap</Text>,
    value: <Text componentName="standard">1</Text>,
    css: <Text componentName="standard">gap: 0.25rem; /* 4px */</Text>,
  }, {
    prop: <Text componentName="standard">gap</Text>,
    value: <Text componentName="standard">1.5</Text>,
    css: <Text componentName="standard">gap: 0.375rem; /* 6px */</Text>,
  }, {
    prop: <Text componentName="standard">gap</Text>,
    value: <Text componentName="standard">2</Text>,
    css: <Text componentName="standard">gap: 0.5rem; /* 8px */</Text>,
  }, {
    prop: <Text componentName="standard">gap</Text>,
    value: <Text componentName="standard">2.5</Text>,
    css: <Text componentName="standard">gap: 0.625rem; /* 10px */</Text>,
  }, {
    prop: <Text componentName="standard">gap</Text>,
    value: <Text componentName="standard">3</Text>,
    css: <Text componentName="standard">gap: 0.75rem; /* 12px */</Text>,
  }, {
    prop: <Text componentName="standard">gap</Text>,
    value: <Text componentName="standard">3.5</Text>,
    css: <Text componentName="standard">gap: 0.875rem; /* 14px */</Text>,
  }, {
    prop: <Text componentName="standard">gap</Text>,
    value: <Text componentName="standard">4</Text>,
    css: <Text componentName="standard">gap: 1rem; /* 16px */</Text>,
  }, {
    prop: <Text componentName="standard">gap</Text>,
    value: <Text componentName="standard">5</Text>,
    css: <Text componentName="standard">gap: 1.25rem; /* 20px */</Text>,
  }, {
    prop: <Text componentName="standard">gap</Text>,
    value: <Text componentName="standard">6</Text>,
    css: <Text componentName="standard">gap: 1.5rem; /* 24px */</Text>,
  }, {
    prop: <Text componentName="standard">gap</Text>,
    value: <Text componentName="standard">7</Text>,
    css: <Text componentName="standard">gap: 1.75rem; /* 28px */</Text>,
  }, {
    prop: <Text componentName="standard">gap</Text>,
    value: <Text componentName="standard">8</Text>,
    css: <Text componentName="standard">gap: 2rem; /* 32px */</Text>,
  }, {
    prop: <Text componentName="standard">gap</Text>,
    value: <Text componentName="standard">9</Text>,
    css: <Text componentName="standard">gap: 2.25rem; /* 36px */</Text>,
  }, {
    prop: <Text componentName="standard">gap</Text>,
    value: <Text componentName="standard">10</Text>,
    css: <Text componentName="standard">gap: 2.5rem; /* 40px */</Text>,
  }, {
    prop: <Text componentName="standard">gap</Text>,
    value: <Text componentName="standard">11</Text>,
    css: <Text componentName="standard">gap: 2.75rem; /* 44px */</Text>,
  }, {
    prop: <Text componentName="standard">gap</Text>,
    value: <Text componentName="standard">12</Text>,
    css: <Text componentName="standard">gap: 3rem; /* 48px */</Text>,
  }, {
    prop: <Text componentName="standard">gap</Text>,
    value: <Text componentName="standard">14</Text>,
    css: <Text componentName="standard">gap: 3.5rem; /* 56px */</Text>,
  }, {
    prop: <Text componentName="standard">gap</Text>,
    value: <Text componentName="standard">16</Text>,
    css: <Text componentName="standard">gap: 4rem; /* 64px */</Text>,
  }, {
    prop: <Text componentName="standard">gap</Text>,
    value: <Text componentName="standard">20</Text>,
    css: <Text componentName="standard">gap: 5rem; /* 80px */</Text>,
  }, {
    prop: <Text componentName="standard">gap</Text>,
    value: <Text componentName="standard">24</Text>,
    css: <Text componentName="standard">gap: 6rem; /* 96px */</Text>,
  }, {
    prop: <Text componentName="standard">gap</Text>,
    value: <Text componentName="standard">28</Text>,
    css: <Text componentName="standard">gap: 7rem; /* 112px */</Text>,
  }, {
    prop: <Text componentName="standard">gap</Text>,
    value: <Text componentName="standard">32</Text>,
    css: <Text componentName="standard">gap: 8rem; /* 128px */</Text>,
  }, {
    prop: <Text componentName="standard">gap</Text>,
    value: <Text componentName="standard">36</Text>,
    css: <Text componentName="standard">gap: 9rem; /* 144px */</Text>,
  }, {
    prop: <Text componentName="standard">gap</Text>,
    value: <Text componentName="standard">40</Text>,
    css: <Text componentName="standard">gap: 10rem; /* 160px */</Text>,
  }, {
    prop: <Text componentName="standard">gap</Text>,
    value: <Text componentName="standard">44</Text>,
    css: <Text componentName="standard">gap: 11rem; /* 176px */</Text>,
  }, {
    prop: <Text componentName="standard">gap</Text>,
    value: <Text componentName="standard">48</Text>,
    css: <Text componentName="standard">gap: 12rem; /* 192px */</Text>,
  }, {
    prop: <Text componentName="standard">gap</Text>,
    value: <Text componentName="standard">52</Text>,
    css: <Text componentName="standard">gap: 13rem; /* 208px */</Text>,
  }, {
    prop: <Text componentName="standard">gap</Text>,
    value: <Text componentName="standard">56</Text>,
    css: <Text componentName="standard">gap: 14rem; /* 224px */</Text>,
  }, {
    prop: <Text componentName="standard">gap</Text>,
    value: <Text componentName="standard">60</Text>,
    css: <Text componentName="standard">gap: 15rem; /* 240px */</Text>,
  }, {
    prop: <Text componentName="standard">gap</Text>,
    value: <Text componentName="standard">64</Text>,
    css: <Text componentName="standard">gap: 16rem; /* 256px */</Text>,
  }, {
    prop: <Text componentName="standard">gap</Text>,
    value: <Text componentName="standard">72</Text>,
    css: <Text componentName="standard">gap: 18rem; /* 288px */</Text>,
  }, {
    prop: <Text componentName="standard">gap</Text>,
    value: <Text componentName="standard">80</Text>,
    css: <Text componentName="standard">gap: 20rem; /* 320px */</Text>,
  }, {
    prop: <Text componentName="standard">gap</Text>,
    value: <Text componentName="standard">96</Text>,
    css: <Text componentName="standard">gap: 24rem; /* 384px */</Text>,
  }, {
    prop: <Text componentName="standard">gapX</Text>,
    value: <Text componentName="standard">0</Text>,
    css: <Text componentName="standard">column-gap: 0px;</Text>,
  }, {
    prop: <Text componentName="standard">gapX</Text>,
    value: <Text componentName="standard">0.5</Text>,
    css: <Text componentName="standard">column-gap: 0.125rem; /* 2px */</Text>,
  }, {
    prop: <Text componentName="standard">gapX</Text>,
    value: <Text componentName="standard">1</Text>,
    css: <Text componentName="standard">column-gap: 0.25rem; /* 4px */</Text>,
  }, {
    prop: <Text componentName="standard">gapX</Text>,
    value: <Text componentName="standard">1.5</Text>,
    css: <Text componentName="standard">column-gap: 0.375rem; /* 6px */</Text>,
  }, {
    prop: <Text componentName="standard">gapX</Text>,
    value: <Text componentName="standard">2</Text>,
    css: <Text componentName="standard">column-gap: 0.5rem; /* 8px */</Text>,
  }, {
    prop: <Text componentName="standard">gapX</Text>,
    value: <Text componentName="standard">2.5</Text>,
    css: <Text componentName="standard">column-gap: 0.625rem; /* 10px */</Text>,
  }, {
    prop: <Text componentName="standard">gapX</Text>,
    value: <Text componentName="standard">3</Text>,
    css: <Text componentName="standard">column-gap: 0.75rem; /* 12px */</Text>,
  }, {
    prop: <Text componentName="standard">gapX</Text>,
    value: <Text componentName="standard">3.5</Text>,
    css: <Text componentName="standard">column-gap: 0.875rem; /* 14px */</Text>,
  }, {
    prop: <Text componentName="standard">gapX</Text>,
    value: <Text componentName="standard">4</Text>,
    css: <Text componentName="standard">column-gap: 1rem; /* 16px */</Text>,
  }, {
    prop: <Text componentName="standard">gapX</Text>,
    value: <Text componentName="standard">5</Text>,
    css: <Text componentName="standard">column-gap: 1.25rem; /* 20px */</Text>,
  }, {
    prop: <Text componentName="standard">gapX</Text>,
    value: <Text componentName="standard">6</Text>,
    css: <Text componentName="standard">column-gap: 1.5rem; /* 24px */</Text>,
  }, {
    prop: <Text componentName="standard">gapX</Text>,
    value: <Text componentName="standard">7</Text>,
    css: <Text componentName="standard">column-gap: 1.75rem; /* 28px */</Text>,
  }, {
    prop: <Text componentName="standard">gapX</Text>,
    value: <Text componentName="standard">8</Text>,
    css: <Text componentName="standard">column-gap: 2rem; /* 32px */</Text>,
  }, {
    prop: <Text componentName="standard">gapX</Text>,
    value: <Text componentName="standard">9</Text>,
    css: <Text componentName="standard">column-gap: 2.25rem; /* 36px */</Text>,
  }, {
    prop: <Text componentName="standard">gapX</Text>,
    value: <Text componentName="standard">10</Text>,
    css: <Text componentName="standard">column-gap: 2.5rem; /* 40px */</Text>,
  }, {
    prop: <Text componentName="standard">gapX</Text>,
    value: <Text componentName="standard">11</Text>,
    css: <Text componentName="standard">column-gap: 2.75rem; /* 44px */</Text>,
  }, {
    prop: <Text componentName="standard">gapX</Text>,
    value: <Text componentName="standard">12</Text>,
    css: <Text componentName="standard">column-gap: 3rem; /* 48px */</Text>,
  }, {
    prop: <Text componentName="standard">gapX</Text>,
    value: <Text componentName="standard">14</Text>,
    css: <Text componentName="standard">column-gap: 3.5rem; /* 56px */</Text>,
  }, {
    prop: <Text componentName="standard">gapX</Text>,
    value: <Text componentName="standard">16</Text>,
    css: <Text componentName="standard">column-gap: 4rem; /* 64px */</Text>,
  }, {
    prop: <Text componentName="standard">gapX</Text>,
    value: <Text componentName="standard">20</Text>,
    css: <Text componentName="standard">column-gap: 5rem; /* 80px */</Text>,
  }, {
    prop: <Text componentName="standard">gapX</Text>,
    value: <Text componentName="standard">24</Text>,
    css: <Text componentName="standard">column-gap: 6rem; /* 96px */</Text>,
  }, {
    prop: <Text componentName="standard">gapX</Text>,
    value: <Text componentName="standard">28</Text>,
    css: <Text componentName="standard">column-gap: 7rem; /* 112px */</Text>,
  }, {
    prop: <Text componentName="standard">gapX</Text>,
    value: <Text componentName="standard">32</Text>,
    css: <Text componentName="standard">column-gap: 8rem; /* 128px */</Text>,
  }, {
    prop: <Text componentName="standard">gapX</Text>,
    value: <Text componentName="standard">36</Text>,
    css: <Text componentName="standard">column-gap: 9rem; /* 144px */</Text>,
  }, {
    prop: <Text componentName="standard">gapX</Text>,
    value: <Text componentName="standard">40</Text>,
    css: <Text componentName="standard">column-gap: 10rem; /* 160px */</Text>,
  }, {
    prop: <Text componentName="standard">gapX</Text>,
    value: <Text componentName="standard">44</Text>,
    css: <Text componentName="standard">column-gap: 11rem; /* 176px */</Text>,
  }, {
    prop: <Text componentName="standard">gapX</Text>,
    value: <Text componentName="standard">48</Text>,
    css: <Text componentName="standard">column-gap: 12rem; /* 192px */</Text>,
  }, {
    prop: <Text componentName="standard">gapX</Text>,
    value: <Text componentName="standard">52</Text>,
    css: <Text componentName="standard">column-gap: 13rem; /* 208px */</Text>,
  }, {
    prop: <Text componentName="standard">gapX</Text>,
    value: <Text componentName="standard">56</Text>,
    css: <Text componentName="standard">column-gap: 14rem; /* 224px */</Text>,
  }, {
    prop: <Text componentName="standard">gapX</Text>,
    value: <Text componentName="standard">60</Text>,
    css: <Text componentName="standard">column-gap: 15rem; /* 240px */</Text>,
  }, {
    prop: <Text componentName="standard">gapX</Text>,
    value: <Text componentName="standard">64</Text>,
    css: <Text componentName="standard">column-gap: 16rem; /* 256px */</Text>,
  }, {
    prop: <Text componentName="standard">gapX</Text>,
    value: <Text componentName="standard">72</Text>,
    css: <Text componentName="standard">column-gap: 18rem; /* 288px */</Text>,
  }, {
    prop: <Text componentName="standard">gapX</Text>,
    value: <Text componentName="standard">80</Text>,
    css: <Text componentName="standard">column-gap: 20rem; /* 320px */</Text>,
  }, {
    prop: <Text componentName="standard">gapX</Text>,
    value: <Text componentName="standard">96</Text>,
    css: <Text componentName="standard">column-gap: 24rem; /* 384px */</Text>,
  }, {
    prop: <Text componentName="standard">gapY</Text>,
    value: <Text componentName="standard">0</Text>,
    css: <Text componentName="standard">row-gap: 0px;</Text>,
  }, {
    prop: <Text componentName="standard">gapY</Text>,
    value: <Text componentName="standard">0.5</Text>,
    css: <Text componentName="standard">row-gap: 0.125rem; /* 2px */</Text>,
  }, {
    prop: <Text componentName="standard">gapY</Text>,
    value: <Text componentName="standard">1</Text>,
    css: <Text componentName="standard">row-gap: 0.25rem; /* 4px */</Text>,
  }, {
    prop: <Text componentName="standard">gapY</Text>,
    value: <Text componentName="standard">1.5</Text>,
    css: <Text componentName="standard">row-gap: 0.375rem; /* 6px */</Text>,
  }, {
    prop: <Text componentName="standard">gapY</Text>,
    value: <Text componentName="standard">2</Text>,
    css: <Text componentName="standard">row-gap: 0.5rem; /* 8px */</Text>,
  }, {
    prop: <Text componentName="standard">gapY</Text>,
    value: <Text componentName="standard">2.5</Text>,
    css: <Text componentName="standard">row-gap: 0.625rem; /* 10px */</Text>,
  }, {
    prop: <Text componentName="standard">gapY</Text>,
    value: <Text componentName="standard">3</Text>,
    css: <Text componentName="standard">row-gap: 0.75rem; /* 12px */</Text>,
  }, {
    prop: <Text componentName="standard">gapY</Text>,
    value: <Text componentName="standard">3.5</Text>,
    css: <Text componentName="standard">row-gap: 0.875rem; /* 14px */</Text>,
  }, {
    prop: <Text componentName="standard">gapY</Text>,
    value: <Text componentName="standard">4</Text>,
    css: <Text componentName="standard">row-gap: 1rem; /* 16px */</Text>,
  }, {
    prop: <Text componentName="standard">gapY</Text>,
    value: <Text componentName="standard">5</Text>,
    css: <Text componentName="standard">row-gap: 1.25rem; /* 20px */</Text>,
  }, {
    prop: <Text componentName="standard">gapY</Text>,
    value: <Text componentName="standard">6</Text>,
    css: <Text componentName="standard">row-gap: 1.5rem; /* 24px */</Text>,
  }, {
    prop: <Text componentName="standard">gapY</Text>,
    value: <Text componentName="standard">7</Text>,
    css: <Text componentName="standard">row-gap: 1.75rem; /* 28px */</Text>,
  }, {
    prop: <Text componentName="standard">gapY</Text>,
    value: <Text componentName="standard">8</Text>,
    css: <Text componentName="standard">row-gap: 2rem; /* 32px */</Text>,
  }, {
    prop: <Text componentName="standard">gapY</Text>,
    value: <Text componentName="standard">9</Text>,
    css: <Text componentName="standard">row-gap: 2.25rem; /* 36px */</Text>,
  }, {
    prop: <Text componentName="standard">gapY</Text>,
    value: <Text componentName="standard">10</Text>,
    css: <Text componentName="standard">row-gap: 2.5rem; /* 40px */</Text>,
  }, {
    prop: <Text componentName="standard">gapY</Text>,
    value: <Text componentName="standard">11</Text>,
    css: <Text componentName="standard">row-gap: 2.75rem; /* 44px */</Text>,
  }, {
    prop: <Text componentName="standard">gapY</Text>,
    value: <Text componentName="standard">12</Text>,
    css: <Text componentName="standard">row-gap: 3rem; /* 48px */</Text>,
  }, {
    prop: <Text componentName="standard">gapY</Text>,
    value: <Text componentName="standard">14</Text>,
    css: <Text componentName="standard">row-gap: 3.5rem; /* 56px */</Text>,
  }, {
    prop: <Text componentName="standard">gapY</Text>,
    value: <Text componentName="standard">16</Text>,
    css: <Text componentName="standard">row-gap: 4rem; /* 64px */</Text>,
  }, {
    prop: <Text componentName="standard">gapY</Text>,
    value: <Text componentName="standard">20</Text>,
    css: <Text componentName="standard">row-gap: 5rem; /* 80px */</Text>,
  }, {
    prop: <Text componentName="standard">gapY</Text>,
    value: <Text componentName="standard">24</Text>,
    css: <Text componentName="standard">row-gap: 6rem; /* 96px */</Text>,
  }, {
    prop: <Text componentName="standard">gapY</Text>,
    value: <Text componentName="standard">28</Text>,
    css: <Text componentName="standard">row-gap: 7rem; /* 112px */</Text>,
  }, {
    prop: <Text componentName="standard">gapY</Text>,
    value: <Text componentName="standard">32</Text>,
    css: <Text componentName="standard">row-gap: 8rem; /* 128px */</Text>,
  }, {
    prop: <Text componentName="standard">gapY</Text>,
    value: <Text componentName="standard">36</Text>,
    css: <Text componentName="standard">row-gap: 9rem; /* 144px */</Text>,
  }, {
    prop: <Text componentName="standard">gapY</Text>,
    value: <Text componentName="standard">40</Text>,
    css: <Text componentName="standard">row-gap: 10rem; /* 160px */</Text>,
  }, {
    prop: <Text componentName="standard">gapY</Text>,
    value: <Text componentName="standard">44</Text>,
    css: <Text componentName="standard">row-gap: 11rem; /* 176px */</Text>,
  }, {
    prop: <Text componentName="standard">gapY</Text>,
    value: <Text componentName="standard">48</Text>,
    css: <Text componentName="standard">row-gap: 12rem; /* 192px */</Text>,
  }, {
    prop: <Text componentName="standard">gapY</Text>,
    value: <Text componentName="standard">52</Text>,
    css: <Text componentName="standard">row-gap: 13rem; /* 208px */</Text>,
  }, {
    prop: <Text componentName="standard">gapY</Text>,
    value: <Text componentName="standard">56</Text>,
    css: <Text componentName="standard">row-gap: 14rem; /* 224px */</Text>,
  }, {
    prop: <Text componentName="standard">gapY</Text>,
    value: <Text componentName="standard">60</Text>,
    css: <Text componentName="standard">row-gap: 15rem; /* 240px */</Text>,
  }, {
    prop: <Text componentName="standard">gapY</Text>,
    value: <Text componentName="standard">64</Text>,
    css: <Text componentName="standard">row-gap: 16rem; /* 256px */</Text>,
  }, {
    prop: <Text componentName="standard">gapY</Text>,
    value: <Text componentName="standard">72</Text>,
    css: <Text componentName="standard">row-gap: 18rem; /* 288px */</Text>,
  }, {
    prop: <Text componentName="standard">gapY</Text>,
    value: <Text componentName="standard">80</Text>,
    css: <Text componentName="standard">row-gap: 20rem; /* 320px */</Text>,
  }, {
    prop: <Text componentName="standard">gapY</Text>,
    value: <Text componentName="standard">96</Text>,
    css: <Text componentName="standard">row-gap: 24rem; /* 384px */</Text>,
  }]

  return(
    <Table columns={cols} rows={rows} my="6"
    colColor="slate" colColorContrast="50"
    darkColColor="slate" darkColColorContrast="700"
    scroll scrollHeight={350} />
  )
}

export const GapExample = () => {
  return(
    <Example flex={false} py={5}>
      <div className="grid grid-cols-2 gap-4 text-white text-sm text-center font-bold leading-6 bg-stripes-purple rounded-lg">
        <div className="px-4 py-4 rounded-lg shadow-lg bg-purple-500">01</div>
        <div className="px-4 py-4 rounded-lg shadow-lg bg-purple-500">02</div>
        <div className="px-4 py-4 rounded-lg shadow-lg bg-purple-500">03</div>
        <div className="px-4 py-4 rounded-lg shadow-lg bg-purple-500">04</div>
      </div>
    </Example>
  )
}

export const GapRowColumnExample = () => {
  return(
    <Example flex={false} py={5}>
      <div className="grid grid-cols-2 gap-x-8 gap-y-9 text-white text-sm text-center font-bold leading-6 bg-stripes-purple rounded-lg">
        <div className="px-4 py-4 rounded-lg shadow-lg bg-purple-500">01</div>
        <div className="px-4 py-4 rounded-lg shadow-lg bg-purple-500">02</div>
        <div className="px-4 py-4 rounded-lg shadow-lg bg-purple-500">03</div>
        <div className="px-4 py-4 rounded-lg shadow-lg bg-purple-500">04</div>
      </div>
    </Example>
  )
}
