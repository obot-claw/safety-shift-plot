# Shift Plot for Clinical Trials
![alt tag](https://user-images.githubusercontent.com/31038805/33946258-4d8cc192-dfef-11e7-8049-f63ff351d826.gif)

## Overview
Safety Shift Plot is a JavaScript library, built using Webcharts ([1](https://github.com/RhoInc/Webcharts), [2](https://github.com/RhoInc/webcharts-wrapper-boilerplate)), that allows users to compare lab and vital sign values between two time points. A typical chart created with Saftey Shift Plot looks like the above chart when it is first loaded. It also features a self updating data listing below the chart that shows meta data about the selected points as pictured below. 

![alt tag](https://user-images.githubusercontent.com/31038805/33946248-46a9933c-dfef-11e7-8ac3-7f9ed6bcddf6.gif)

The chart uses the AdAM data standards by default, but can be customized to use any data set that is one record per measurement. Full details about chart configuration are [here](https://github.com/RhoInc/safety-shift-plot/wiki/Configuration).

Users can:
* See the shift plot to compare lab and vital sign values between two time points
* See the number and percentage of participants displayed in the current view (updates with each user interaction)
* Change the measure of interest, and see an updated chart
* Change the baseline visit(s) of interest, and see an updated chart
* Change the comparison visit(s) of interest, and see an updated chart
* Click and drag across data points to show a linked listing of the underlying data
* Filter the shift plot for selected criteria, and see an updated chart (optional)

## Typical Usage
In the simplest case, using a dataset matching all default requirements, the chart can be created with a single line of code.

```javascript
    safetyShiftPlot('body', {}).init(data);
```

The code to load a comma-delimited data set and initialize the customized chart, with filters and simple data mappings, looks like this: 

```javascript
    const settings = {
    time_col: 'VISIT'
    start_value: 'Potassium'
    x_params: {visits: ['Screening'], stat: 'min'}
    y_params: {visits: ['End of Study'], stat: 'max'}
    filters:[
        {value_col: 'SITEID', label: 'Site ID'},
        {value_col: 'SEX', label: 'Sex'},
        {value_col: 'RACE', label: 'Race'}
    ]
    };

    d3.csv(
        '../data/ADBDS.csv',
        function(data) {
            safetyShiftPlot('body', settings).init(data);
        }
    );
```

## Links 
- [Interactive Example](https://rhoinc.github.io/safety-shift-plot/test-page/)
- [Configuration](https://github.com/RhoInc/safety-shift-plot/wiki/Configuration) 
- [API](https://github.com/RhoInc/safety-shift-plot/wiki/API)
- [Technical Documentation](https://github.com/RhoInc/safety-shift-plot/wiki/Technical-Documentation) 
- [Data Guidelines](https://github.com/RhoInc/safety-shift-plot/wiki/Data-Guidelines)

## P004 nextgen functional requirements status

This section tracks the nextgen Chart.js spike against the legacy wiki requirements. The current spike is intentionally partial; unmet items become migration backlog before any replacement release.

| Requirement area | Legacy requirement summary | Spike status |
|---|---|---|
| Measure filter | Select measure for baseline/comparison display. | Implemented in spike. |
| Baseline/comparison visits | Select baseline visit and comparison visit. | Partial: single baseline and comparison selectors implemented. |
| Participant count | Display enrolled/randomized or shown participant count. | Partial: participants with baseline and comparison values shown. |
| Scatter display | Show baseline vs comparison values. | Implemented as Chart.js scatter. |
| Hover details | Show subject ID, baseline, comparison, change, and percent change. | Partial: tooltip includes ID, values, and change; percent change not yet included. |
| Brush/listing | Drag/select points to show detailed table and highlight region. | Partial: click point listing implemented; brush selection not implemented. |
| Box/whisker marginal summaries | Show distribution summaries for selected axes. | Not started. |
| Regression coverage | Validate filters, visits, tooltips, selection/listing, and participant count. | Not started; requires automated browser tests. |
