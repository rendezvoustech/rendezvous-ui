# Rendezvous UI

Run the following command to build the project.

```bash
$ ./gradlew buildAngular
```

Then, package it in an NGINX container using the Pack CLI and the Paketo Buildpacks.

```bash
$ pack build rendezvous-ui --buildpack gcr.io/paketo-buildpacks/nginx --builder paketobuildpacks/builder:base -p dist
```

Finally, you can run the container as follows.

```bash
$ docker run -d --name rendezvous-ui --publish 9004:9004 rendezvous-ui
```