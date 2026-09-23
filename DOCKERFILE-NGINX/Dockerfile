# FROM is a Dockerfile instruction that specifies the base image for the container. In this case, we are using the official Nginx image with version 1.30.4.
FROM nginx:1.30.4

# Install vim for editing files in the container
# -y flag automatically answers 'yes' to any prompts during the installation process.
RUN apt-get update && apt-get install vim -y

# /usr/share/nginx/html/index.html. this is the default location for the Nginx welcome page.
# Copy the index.html file from the local directory to the specified path in the container. 
# This will replace the default Nginx welcome page with our custom index.html file.
COPY index.html /usr/share/nginx/html/index.html

# Change the ownership of the index.html file to the nginx user and group if needed. 
# This is commented out because the default Nginx image already runs as the nginx user, and the copied 
# file will inherit the correct permissions. Uncomment this line if you encounter permission issues.
# RUN chown nginx:nginx /usr/share/nginx/html/index.html