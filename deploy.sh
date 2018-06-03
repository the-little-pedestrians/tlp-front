docker build -t gcr.io/thelittlepedestrians-206020/tlp-front:latest .
gcloud docker -- push gcr.io/thelittlepedestrians-206020/tlp-front:latest
kubectl delete service front
kubectl delete deployment front
kubectl apply -f k8s
