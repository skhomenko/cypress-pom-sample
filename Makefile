IMAGE_NAME = cypress-tests
CONTAINER_NAME = cypress-tests-container

.PHONY: all
all: build run

.PHONY: build
build:
	docker build -t $(IMAGE_NAME) .

.PHONY: run
run:
	docker run --rm --name $(CONTAINER_NAME) $(IMAGE_NAME)

.PHONY: clean
clean:
	docker rmi $(IMAGE_NAME)
