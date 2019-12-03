{{/* vim: set filetype=mustache: */}}
{{/*
Fullname of core chart.
*/}}
{{- define "item.fullname" -}}
{{- printf "%s-item" .Release.Name | trimSuffix "-app" | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{/*
Expand the name of the chart.
*/}}
{{- define "observer.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{/*
Create a default fully qualified app name.
We truncate at 63 chars because some Kubernetes name fields are limited to this (by the DNS naming spec).
*/}}
{{- define "observer.fullname" -}}
{{- $name := default .Chart.Name .Values.nameOverride -}}
{{- printf "%s-%s" .Release.Name $name | trimSuffix "-app" | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{- define "observer.appname" -}}
{{- $name := default .Chart.Name .Values.nameOverride -}}
{{- $releaseName := default .Release.Name .Values.releaseOverride -}}
{{- printf "%s-%s" $releaseName $name | trimSuffix "-app" | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{/*
Get a hostname from URL
*/}}
{{- define "observer.hostname" -}}
{{- . | trimPrefix "http://" |  trimPrefix "https://" | trimSuffix "/" | quote -}}
{{- end -}}