# Software Installation 

## Google Cloud sdk
```bash
sudo rm /etc/apt/preferences.d/nosnap.pref
sudo apt update
sudo apt update
sudo apt install snapd
sudo snap install google-cloud-sdk --classic
```

## kubectl
```
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl
```

## node
```
sudo apt-get install curl python-software-properties software-properties-common 
curl -sL https://deb.nodesource.com/setup_16.x | sudo bash -
sudo apt-get install nodejs 
```

## docker post installation
```
sudo groupadd docker
sudo usermod -aG docker $USER
newgrp docker 
```

## docker shortcuts
```
alias dockerrmall="docker rm -f $(docker ps -a -q)"
```

cloud_user_p_ce436566@linuxacademygclabs.com
4L54UtRQ
https://console.cloud.google.com/getting-started?project=playground-s-11-a8950108&folder=&organizationId=