# Copyright 2016 Prabhu Vignesh Kumar Rajagopal <prabhu.vignesh1990@gmail.com>
FROM ubuntu
RUN apt-key adv --keyserver keyserver.ubuntu.com --recv 7F0CEB10
RUN echo "deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen" | tee -a /etc/apt/sources.list.d/10gen.list
RUN apt-get update
RUN apt-get -y install apt-utils
RUN apt-get -y install mongodb-10gen
CMD ["/usr/bin/mongod", "--config", "/etc/mongodb.conf"] 
