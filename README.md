# rn-screen-progress-bar
React native device screen progress bar.

Pretty simple package that helps implement screen progress bar. It works on ScrollView component, so it will count everything you put inside ContentArea component. It supports both, Android and IOS platforms.
  
 If you have any suggestions or find any bug, feel free to make an issue! 
  

https://user-images.githubusercontent.com/21690864/131182596-e82e0034-a6ad-4028-a912-efc1c2198890.mp4


  <h1>Import and usage</h1>
  
  Firstly, you need to import the ContentArea component to the file you want to use it.

  <code>import {ContentArea} from 'rn-screen-progress-bar';</code>
  
  Than you just need to put the component in the right place and put the children elements inside.
  
```
    <ContentArea>
      <Text>Lorem ipsum dolor sit amet</Text>
    </ContentArea>
```

![Simulator Screen Shot - iPhone 12 - 2021-08-27 at 21 15 10](https://user-images.githubusercontent.com/21690864/131181173-847c4e49-bc1a-4874-9228-7ce1cb9d6b87.png)


<h1>Props</h1>
  <h2>Percentage</h2>

![Simulator Screen Shot - iPhone 12 - 2021-08-27 at 21 14 44](https://user-images.githubusercontent.com/21690864/131183487-87d8196b-eb1a-43f5-84bd-3eeab1723b89.png)


  <h3>percentage</h3>
  By default the percentage text is hidden, to show it you need to pass "percentage" prop. 

  ```
      <ContentArea
        percentage
        percentageColor="#ffffff">
        <Text>Lorem ipsum dolor sit amet</Text>
      </ContentArea>
  ```
  <h3>percentageColor</h3>
  You can also change the text color by passing the color in the "percentageColor" prop. By default it is set to white.

  ```
      <ContentArea
        percentage
        percentageColor="#ffffff">
        <Text>Lorem ipsum dolor sit amet</Text>
      </ContentArea>
  ```
  
  <h2>Customization</h2>
  <h3>backgroundColor</h3>
    It allows to set the color of the underneath bar. By defult it is set to white.

  ```
      <ContentArea
        backgroundColor="#000000">
        <Text>Lorem ipsum dolor sit amet</Text>
      </ContentArea>
  ```
  
  <h3>barColor</h3>
  It allows to change the progress bar background color. By default it is set to black.

  ```
      <ContentArea
        barColor="#8BED4F">
        <Text>Lorem ipsum dolor sit amet</Text>
      </ContentArea>
  ```
  
  <h3>top</h3>
  It allows to set the position of the whole bar from the top. By default it is set to 0.

  ```
      <ContentArea
        top="20">
        <Text>Lorem ipsum dolor sit amet</Text>
      </ContentArea>
  ```

  
