// https://www.terraform.io/docs/providers/digitalocean/d/database_ca
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDigitaloceanDatabaseCaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/d/database_ca#cluster_id DataDigitaloceanDatabaseCa#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/digitalocean/d/database_ca#id DataDigitaloceanDatabaseCa#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/digitalocean/d/database_ca digitalocean_database_ca}
*/
export class DataDigitaloceanDatabaseCa extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "digitalocean_database_ca";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/digitalocean/d/database_ca digitalocean_database_ca} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDigitaloceanDatabaseCaConfig
  */
  public constructor(scope: Construct, id: string, config: DataDigitaloceanDatabaseCaConfig) {
    super(scope, id, {
      terraformResourceType: 'digitalocean_database_ca',
      terraformGeneratorMetadata: {
        providerName: 'digitalocean',
        providerVersion: '2.21.0',
        providerVersionConstraint: '~> 2.19'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
