# Build the Docker image
docker build -t apollo .

# Run the Docker container
docker run -d -p 4000:80 --name apollo apollo