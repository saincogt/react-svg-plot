## Full Stack: Offline Coding Exercise

Using Vue (or React) with no other third party libraries, write a simple implementation of a Plotter - which when given various drawing commands from within a text area, should be able draw them in real-time onto an SVG element.
The following functionality should be captured.

### Core Plotter Logic

-   SVG Element Must Be 250px wide and 250px high
-   The Input field Must Be a textarea element.
-   The plotting language should conform to the following grammar `R <X Coordinate> <Y Coordinate> <Width> <Height>` - Should Draw a rectangle with the parameters marked onto the SVG `C <CX Coordinate> <CY Coordinate> <Radius>` - Should Draw a circle with the parameters marked onto the SVG `P <X1,Y1> <X2,Y2> <X3,Y3> ..... <Xn,Yn>` - Should draw a polygon onto the SVG with the points specified
-   The Plotter should alert the user if the syntax of the plotting arguments is not well formed and should make an effort to tell them at which line in the text area the error had occurred
-   The colour of all SVG elements should be chosen at random.

### Bonus

-   Implement at least one other drawing command (State and describe the command in the readme.txt)

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
