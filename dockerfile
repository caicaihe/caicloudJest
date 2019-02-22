FROM node:slim

RUN apt-get update -y && \
    apt-get install ca-certificates \
      gconf-service \
      libasound2 \
      libatk1.0-0 \
      libatk1.0-0 \
      libdbus-1-3 \
      libgconf-2-4 \
      libgtk-3-0 \
      libnspr4 \
      libnss3 \
      libx11-xcb1 \
      libxss1 \
      libxtst6 \
      fonts-liberation \
      libappindicator3-1 \
      xdg-utils \
      lsb-release \
      wget \
      curl \
      xz-utils -y --no-install-recommends && \
    apt-get install -f && \
    apt-get clean autoclean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* 

COPY ./ /app
WORKDIR /app
RUN npm install
RUN npm install jest -g
CMD ["jest"]