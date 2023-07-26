# Basic Auto Tilling
Build your own auto tilling implementation!

![auto tilling thumbnail](/tutorials/auto-tilling/thumb.gif)

Each tile must keep a number, we will call this the tiles "state". Every possible combination of connected tiles will influence the tiles state in a predictible fasion, to be read later in rendering.

Give each face of a tile a "binary number" as such:

![auto tilling image](/tutorials/auto-tilling/binary.svg)

For every tile, loop over the neighbouring tiles and check to see whether they are occupied. If they are, add that direction's corrosponding binary number to the tile's state value. This creates a unique identifying number for every possible state a tile could be in!

```lua
tile.state = 0

if --[[tile to the top is occupied]] then
	tile.state = tile.state + 1
end

if --[[tile to the right is occupied]] then
	tile.state = tile.state + 2
end

if --[[tile to the bottom is occupied]] then
	tile.state = tile.state + 4
end

if --[[tile to the left is occupied]] then
	tile.state = tile.state + 8
end

return tile.state
```

Now, you should be able to easily compute which sprite to select when drawing your tile!

![auto tilling image](/tutorials/auto-tilling/tiles.svg)

<!-- <span style="text-align: center;display: block;">Published 18th Jan 2021, last updated 21st Jul 2021</span> -->

<div id="json">
	{
		"author": "Dot32",
		"date": "18th Jan 2021",
		"edited": "21st Jul 2021",
		"title": "Custom autotilling made easy",
		"description": "Building your own auto tilling implementation is not as hard as you thought!",
		"image": "/tutorials/auto-tilling/thumb.gif"
	}
</div>