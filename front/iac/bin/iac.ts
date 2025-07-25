#!/usr/bin/env node
import 'source-map-support/register'
import * as cdk from 'aws-cdk-lib'
import { IacStack } from '../stack/iac-stack'

const app = new cdk.App()

const env = {
  account: process.env.AWS_ACCOUNT_ID,
  region: process.env.AWS_REGION
}

const stackName = process.env.STACK_NAME || 'QuantumBrosStack'

new IacStack(app, stackName, {
  env: env
})
