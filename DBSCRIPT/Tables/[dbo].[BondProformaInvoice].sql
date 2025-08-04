USE [CFS_BONDED_WAREHOUSE]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[BondProformaInvoice](
	[BondProformaInvoiceID] [bigint] IDENTITY(1,1) NOT NULL,
	[BondProformaInvoicePrefix] [varchar](20) NULL,
	[BondProformaInvoiceNo] [varchar](255) NULL,
	[ReferenceNo] [varchar](255) NULL,
	[BondProformaInvoiceDate] [datetime] NULL,
	[InvoiceType] [varchar](255) NULL,
	[BOENo] [varchar](255) NULL,
	[trnDocumentLotDetailsID] [bigint] NULL,
	[BOEDate] [datetime] NULL,
	[AgentName] [varchar](255) NULL,
	[AgentID] [int] NULL,
	[LineName] [varchar](255) NULL,
	[LineID] [int] NULL,
	[CHA] [varchar](255) NULL,
	[CHAID] [int] NULL,
	[Forwarder] [varchar](255) NULL,
	[ForwarderID] [int] NULL,
	[IMPORTERNAME] [varchar](255) NULL,
	[IMPORTERID] [int] NULL,
	[BillToCustomerName] [varchar](255) NULL,
	[BillToCustomerID] [int] NULL,
	[BillToCustomerAddress] [varchar](255) NULL,
	[BillToCustomerAddressID] [int] NULL,
	[BillToCustomerGSTNo] [varchar](255) NULL,
	[StateName] [varchar](255) NULL,
	[StateID] [varchar](255) NULL,
	[StateCode] [int] NULL,
	[SEZStatus] [bit] NULL,
	[NoOf20] [int] NULL,
	[NoOf40] [int] NULL,
	[NoOf45] [int] NULL,
	[CargoType] [varchar](255) NULL,
	[CargoTypeID] [int] NULL,
	[DeliveryMode] [varchar](255) NULL,
	[BillComodity] [varchar](255) NULL,
	[BillComodityID] [int] NULL,
	[UOM] [varchar](255) NULL,
	[UOMID] [int] NULL,
	[Area] [decimal](10, 2) NULL,
	[CargoName] [varchar](255) NULL,
	[LGRUptoDate] [datetime] NULL,
	[SubComodity] [varchar](255) NULL,
	[SubComodityID] [int] NULL,
	[Dutyvalue] [varchar](255) NULL,
	[AssessableValue] [varchar](255) NULL,
	[IsCollectEmptyTransportation] [bit] NULL,
	[IsDutyValueInsuranceCalculation] [bit] NULL,
	[IsAssValueInsuranceCalculation] [bit] NULL,
	[NOCValidity] [varchar](255) NULL,
	[NOCDate] [datetime] NULL,
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[IsApproved] [bit] NOT NULL,
	[ApproveRemarks] [varchar](255) NULL,
	[UnApproveRemarks] [varchar](255) NULL,
	[IsFinished] [bit] NOT NULL,
	[Remarks] [varchar](255) NULL
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[BondProformaInvoice] ADD  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[BondProformaInvoice] ADD  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO

ALTER TABLE [dbo].[BondProformaInvoice] ADD  DEFAULT ((0)) FOR [IsApproved]
GO

ALTER TABLE [dbo].[BondProformaInvoice] ADD  DEFAULT ((0)) FOR [IsFinished]
GO


