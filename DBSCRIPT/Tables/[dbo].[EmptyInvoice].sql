USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Table [dbo].[EmptyInvoice]    Script Date: 4/27/2024 4:33:08 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO
--drop TABLE [dbo].[EmptyInvoice]
CREATE TABLE [dbo].[EmptyInvoice](
	[EmptyInvoiceID] [bigint] IDENTITY(1,1) NOT NULL,
	[EmptyInvoicePrefix] [varchar](100) NULL,
	[EmptyInvoiceNo] [varchar](100) NULL,	
	[ContNO] [varchar](100) NULL,
	[trnDocumentContainerID] [int] NULL,
	[trnEmptyContainerOutWONo] [varchar](100) NULL,
	[trnEmptyContainerOutWOID] [int] NULL,
	[trnEmptyContainerOutWODate] [datetime] NULL,
	[NOCNO] [varchar](100) NULL,
	[NOCID] [int] NULL,	
	[FromInvoiceDate] [datetime] NULL,
	[ToInvoiceDate] [datetime] NULL,
	[Importer] [varchar](100) NULL,
	[ImporterID] [int] NULL,
	[CHA] [varchar](100) NULL,
	[CHAID] [int] NULL,
	[Forwarder] [varchar](100) NULL,
	[ForwarderID] [int] NULL,
	[Consoler] [varchar](100) NULL,
	[ConsolerID] [int] NULL,
	[State] [varchar](100) NULL,
	[StateID] [int] NULL,
	[BillingParty] [varchar](100) NULL,
	[BillingPartyID] [int] NULL,
	[BillingPartyAddress] [varchar](max) NULL,
	[BillingPartyAddressID] [int] NULL,
	[PaymentMode] [varchar](100) NULL,
	[BillingPartyGSTIN] [varchar](100) NULL,
	[GSTCustomerType] [varchar](100) NULL,
	[FRBundlingStatus] [varchar](100) NULL,
	[Bundle20] [varchar](100) NULL,
	[Remarks] [varchar](max) NULL,
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[IsFinished] [bit] NOT NULL,
	[YearID] [int] NULL,
	[IsApproved] [bit] NOT NULL,
	[ApproveRemarks] [varchar](255) NULL,
	[UnApproveRemarks] [varchar](255) NULL,
	[ApprovedDate] [datetime] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[EmptyInvoice] ADD  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[EmptyInvoice] ADD  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO

ALTER TABLE [dbo].[EmptyInvoice] ADD  DEFAULT ((0)) FOR [IsFinished]
GO

ALTER TABLE [dbo].[EmptyInvoice] ADD  DEFAULT ((0)) FOR [IsApproved]
GO


