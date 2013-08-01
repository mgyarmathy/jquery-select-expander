jquery-select-expander
======================

If you're a fan of clean, semantic code, you probably hate having to write this when building HTML forms:

```html
<select>
  <option value="">Select State</option>
  <option value="Alabama">Alabama</option>
  <option value="Alaska">Alaska</option>
  <option value="Arizona">Arizona</option>
  <option value="Arkansas">Arkansas</option>
  <option value="California">California</option>
  <option value="Colorado">Colorado</option>
  <option value="Connecticut">Connecticut</option>
  <option value="Delaware">Delaware</option>
  <option value="Florida">Florida</option>
  <option value="Georgia">Georgia</option>
  <option value="Hawaii">Hawaii</option>
  <option value="Idaho">Idaho</option>
  <option value="Illinois">Illinois</option>
  <option value="Indiana">Indiana</option>
  <option value="Iowa">Iowa</option>
  <option value="Kansas">Kansas</option>
  <option value="Kentucky">Kentucky</option>
  <option value="Louisiana">Louisiana</option>
  <option value="Maine">Maine</option>
  <option value="Maryland">Maryland</option>
  <option value="Massachusetts">Massachusetts</option>
  <option value="Michigan">Michigan</option>
  <option value="Minnesota">Minnesota</option>
  <option value="Mississippi">Mississippi</option>
  <option value="Missouri">Missouri</option>
  <option value="Montana">Montana</option>
  <option value="Nebraska">Nebraska</option>
  <option value="Nevada">Nevada</option>
  <option value="New Hampshire">New Hampshire</option>
  <option value="New Jersey">New Jersey</option>
  <option value="New Mexico">New Mexico</option>
  <option value="New York">New York</option>
  <option value="North Carolina">North Carolina</option>
  <option value="North Dakota">North Dakota</option>
  <option value="Ohio">Ohio</option>
  <option value="Oklahoma">Oklahoma</option>
  <option value="Oregon">Oregon</option>
  <option value="Pennsylvania">Pennsylvania</option>
  <option value="Rhode Island">Rhode Island</option>
  <option value="South Carolina">South Carolina</option>
  <option value="South Dakota">South Dakota</option>
  <option value="Tennessee">Tennessee</option>
  <option value="Texas">Texas</option>
  <option value="Utah">Utah</option>
  <option value="Vermont">Vermont</option>
  <option value="Virginia">Virginia</option>
  <option value="Washington">Washington</option>
  <option value="West Virginia">West Virginia</option>
  <option value="Wisconsin">Wisconsin</option>
  <option value="Wyoming">Wyoming</option>
  <option value="Alberta">Alberta</option>
  <option value="British Columbia">British Columbia</option>
  <option value="Manitoba">Manitoba</option>
  <option value="New Brunswick">New Brunswick</option>
  <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
  <option value="Northwest Territories">Northwest Territories</option>
  <option value="Nova Scotia">Nova Scotia</option>
  <option value="Nunavut">Nunavut</option>
  <option value="Ontario">Ontario</option>
  <option value="Prince Edward Island">Prince Edward Island</option>
  <option value="Quebec">Quebec</option>
  <option value="Saskatchewan">Saskatchewan</option>
  <option value="Yukon Territory">Yukon Territory</option>
  <option value="Australian Capital Territory">Australian Capital Territory</option>
  <option value="New South Wales">New South Wales</option>
  <option value="Northern Territory">Northern Territory</option>
  <option value="Queensland">Queensland</option>
  <option value="South Australia">South Australia</option>
  <option value="Tasmania">Tasmania</option>
  <option value="Victoria">Victoria</option>
  <option value="Western Australia">Western Australia</option>
</select> 
```

Sure, most editors allow you to collapse and hide these elements, but how about we try something a little cleaner?

```html
<select data-from="state"></select>
```

Much nicer if you ask me.

### Usage

Download and copy the plugin + json data into your `js/` folder. 
(make sure the `data/` folder is in the same directory as the plugin)

Drop in the plugin after your jQuery include:

```html
<script src="js/jquery.js"></script>
<script src="js/jquery-select-expander.min.js"></script>
```

Call the plugin after the DOM is ready:

```javascript
$(document).ready(function(){
    $('select').selectExpander();
});
```

Specify the options for your select elements using the `data-from` attribute:

```html
<select data-from="country"></select>
```

The `data-from` attribute specifies the name of the json file contained in the `data/` folder. 
This plugin comes with json files for states and countries out of the box. Feel free to modify them as you please.

If you want to add your own json file, follow this format:

```
{
    "<option-value>": "<option-label>",
    "<option-value>": "<option-label>",
    "<option-value>": "<option-label>"
}
```

Create a useful set of options? Please make a pull request to add it to my collection!
