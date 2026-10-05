from PIL import Image

def remove_background(input_path, output_path, tolerance=10):
    img = Image.open(input_path).convert("RGBA")
    
    # Get image dimensions
    width, height = img.size
    
    # Create a new image for the output
    out = Image.new("RGBA", img.size)
    
    # Do a flood fill from the corners to find background pixels
    # We will use a set to keep track of visited pixels
    visited = set()
    stack = [(0, 0), (width-1, 0), (0, height-1), (width-1, height-1)]
    
    pixels = img.load()
    out_pixels = out.load()
    
    # Initialize output with original pixels
    for y in range(height):
        for x in range(width):
            out_pixels[x, y] = pixels[x, y]
            
    # Flood fill
    while stack:
        x, y = stack.pop()
        
        if (x, y) in visited:
            continue
            
        visited.add((x, y))
        
        # Check bounds
        if x < 0 or x >= width or y < 0 or y >= height:
            continue
            
        r, g, b, a = pixels[x, y]
        
        # If the pixel is close to black (background)
        if r <= tolerance and g <= tolerance and b <= tolerance:
            # Make it transparent
            out_pixels[x, y] = (r, g, b, 0)
            
            # Add neighbors
            stack.extend([
                (x+1, y), (x-1, y), (x, y+1), (x, y-1)
            ])
            
    # Optional: Soften the edges a bit by checking alpha of neighbors
    # For a sharp logo, this basic flood fill is often enough if the bg is pure black.
    
    out.save(output_path)
    print("Saved to", output_path)

remove_background("/Users/hevinpatoliya/.gemini/antigravity/brain/0e100b3f-07c4-44d7-8f51-302ae2113f96/.user_uploaded/media_1791149328233.png", "public/logo.png", tolerance=15)
